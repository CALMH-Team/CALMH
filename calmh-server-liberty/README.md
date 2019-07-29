# CALMH Server WebSphere Liberty profile
This is a work in progress implementation of the CALMH server running on Liberty, using a JAX-RS REST service implementation, and the org.ektorp library to access CouchDB locally or Cloudant on the IBM Cloud.

## Requirements
The Maven project was created on Eclipse for JEE, 2018-12 R, and Java 8.
Eclipse tooling plugin: IBM Liberty Developer Tools 19.0.0.6 for Eclipse, and for server a WAS Liberty Profile 19.0.0.7 with Java EE 8 Full Platform, CouchDB and Cloudant

## End points on running server
GET http://localhost:9080/calmh/rest/test/ping - ping service to see if the server is running
GET http://localhost:9080/calmh/rest/test/getCouchDatabase - test service to see the CouchDB/Cloudant database name

GET http://localhost:9080/calmh/rest/setup/initvalues - setup server with initial data
GET http://localhost:9080/calmh/rest/setup/samplevalues - setup server with some sample data

GET http://localhost:9080/calmh/rest/auth/login/<id>/<pw> - do a user authentication

GET http://localhost:9080/calmh/rest/user/<id> - read user
GET http://localhost:9080/calmh/rest/user/all - read all users
POST http://localhost:9080/calmh/rest/user/new - create new user
PUT http://localhost:9080/calmh/rest/user/<id> - update user
DELETE http://localhost:9080/calmh/rest/user/<id> - delete user

GET http://localhost:9080/calmh/rest/disaster/<id> - read disaster event
GET http://localhost:9080/calmh/rest/disaster/all - read all disaster events
POST http://localhost:9080/calmh/rest/disaster/new - create disaster event
PUT http://localhost:9080/calmh/rest/disaster/<id> - update disaster event
DELETE http://localhost:9080/calmh/rest/disaster/<id> - delete disaster event
