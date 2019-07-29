const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')
const Cloudant = require('@cloudant/cloudant');
// Cloudant instance Pere
var cloudant = Cloudant('https://b58d50e5-6623-4186-8c2c-ff2526f423a6-bluemix:c5862544575a0aac7ff810c3a9d824f7e48f0fa0c7ae64b877ffc4f655768c80@b58d50e5-6623-4186-8c2c-ff2526f423a6-bluemix.cloudantnosqldb.appdomain.cloud');
// Cloudant instance Bas
//var cloudant = Cloudant('https://e1bf4e40-2414-4915-a03f-9f9dc272373c-bluemix:08ded91c4ea922069502e43626dca51deecfbfc3f2d5ba8eda27da6c5bc17988@e1bf4e40-2414-4915-a03f-9f9dc272373c-bluemix.cloudantnosqldb.appdomain.cloud');
// local CouchDB
//var cloudant = Cloudant('http://calmh:calmh@localhost:5984'); 
var dbName = 'calmh';

const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100'
];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (request, response, next) {
    // Instead of "*" you should enable only specific origins
    response.header('Access-Control-Allow-Origin', '*');
    // Supported HTTP verbs
    response.header('Access-Control-Allow-Methods', 'HEAD,GET,PUT,POST,DELETE');
    // Other custom headers
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


var docTypes = {
    user: "user",
    disaster: "disaster",
    case: "case",
    chat: "conversation"
};
var httpResponse = {
    OK: '200',
    NOT_FOUND: '400',
    UNAUTHORIZED: '401',
    ERROR: '500'
};

cloudant.db.create(dbName).then((data) => {
    console.log("Created database: " + dbName);
}).catch(err => {
    console.log("Did not create database: " + dbName);
});
mydb = cloudant.db.use(dbName);


var returnError = function (response, caller, error) {
    console.log('[mydb.' + caller + '] ', JSON.stringify(error));
    response.send(httpResponse.ERROR);
    throw error;
}

// These come from https://github.com/apache/couchdb-nano#database-functions

var insertOne = function (doc, response) {
    mydb.insert(doc).then((body, header) => {
        doc._id = body.id;
        response.send(doc);
    }).catch(error => {
        returnError(response, 'insertOne', error)
    });
};

var updateOne = function (newDoc, response) {
    mydb.get(newDoc._id).then((currentDoc) => {
        // Update currentDoc to include the data from newDoc
        for (var k in newDoc) {
            currentDoc[k] = newDoc[k];
        }
        insertOne(currentDoc, response);
    }).catch(error => {
        returnError(response, 'updateOne', error)
    });
};

var deleteOne = function (id, response) {
    // First we get the latest _rev
    mydb.get(id).then((doc) => {
        var rev = doc._rev
        mydb.destroy(id, rev).then((doc) => {
            response.json(httpResponse.OK);
        }).catch(error => {
            returnError(response, 'deleteOne', error)
        });
    }).catch(error => {
        returnError(response, 'deleteOne.getOne', error)
    });
};

var getOne = function (id, response) {
    mydb.get(id).then((doc) => {
        response.json(doc);
    }).catch(error => {
        returnError(response, 'getOne', error)
    });
};

var getAll = function (query, response) {
    mydb.find(query).then((doc) => {
        response.json(doc.docs);
    }).catch(error => {
        returnError(response, 'getAll', error)
    });
};

/**
 * 
 * Do a password check, return a 401 on fail, return the user doc on match
 */
var checkPassword = function (username, password, response) {
    var query = {
        "selector": {
            "type": { "$eq": docTypes.user },
            "username": { "$eq": username }
        },
        limit: 1
    }
    mydb.find(query).then((docs) => {
        if (docs.docs[0] && docs.docs[0].password === password) {
            response.json(docs.docs[0]);
        } else {
            response.status(httpResponse.UNAUTHORIZED).send('Login failed.');
        }
    }).catch(error => {
        returnError(response, 'checkPassword', error);
    });
};


/////////////
// HTTP Server
/////////////

/**
 * Returns the value of one of the docTypes if requestedType matches.
 * @param {docTypes} requestedType 
 */
var getType = function (requestedType, response) {
    var documentType = null;
    Object.keys(docTypes).forEach(type => {
        if (requestedType == type) {
            documentType = docTypes[type];
        }
    });
    if (documentType == null) {
        returnError(response, "GetType", new Error("Type does not exist."));
    }
    return documentType;
};

/**
 * Do login using username and password
*/
app.post("/rest/login", (request, response) => {
    checkPassword(request.body.username, request.body.password, response);
});

/**
 * Create document
 */
app.post("/rest/:type/", (request, response) => {
    var document = request.body;
    document.type = getType(request.params.type, response);
    insertOne(document, response);
});

/**
 * Update document
 */
app.put("/rest/:type/:id", (request, response) => {
    if (request.params.id === "all") {
        returnError(response, "PUT", new Error("Can't PUT \"all\"."));
    }
    var document = request.body;
    document._id = request.params.id;
    document.type = getType(request.params.type, response);
    updateOne(document, response);
});

/**
 * Get document
 */
app.get("/rest/:type/:id", (request, response) => {
    if (request.params.id === "all") {
        var q = {
            "selector": {
                "type": { "$eq": getType(request.params.type, response) }
            }
        }
        getAll(q, response);
    } else {
        getOne(request.params.id, response);
    }
});

/**
 * Delete document
 */
app.delete("/rest/:type/:id", (request, response) => {
    if (request.params.id === "all") {
        returnError(response, "DELETE", new Error("Can't DELETE \"all\"."));
    }
    deleteOne(request.params.id, response);
});


/////////////
// SocketIO
/////////////
//io.origins(allowedOrigins);
io.sockets.on('connection', (socket) => {
    socket.on('disconnect', function () {
        io.emit('users-changed', { user: socket.nickname, event: 'left' });
    });

    socket.on('set-nickname', (nickname) => {
        socket.nickname = nickname;
        io.emit('users-changed', { user: nickname, event: 'joined' });
    });

    socket.on('add-message', (message) => {
        io.emit('message', { text: message.text, from: socket.nickname, created: new Date() });
    });

});


var port = process.env.PORT || 3001
app.use(express.static('www'));
http.listen(port, () => {
    // Pere
    //https://calmh-server.mybluemix.net/rest/*
    // Bas
    //https://calmh-server-js-comedic-dog.mybluemix.net/rest/*
    // local
    //http://localhost:3001/rest/*
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
