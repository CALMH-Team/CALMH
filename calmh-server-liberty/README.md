# CALMH Server WebSphere Liberty profile
This is a work in progress implementation of the CALMH server running on Liberty, using a JAX-RS REST service implementation, and the org.ektorp library to access CouchDB locally or Cloudant on the IBM Cloud.

## Requirements
The Maven project was created on Eclipse for JEE, 2018-12 R, and Java 8.
Eclipse tooling: plugin IBM Liberty Developer Tools 19.0.0.6 for Eclipse, and for server WAS Liberty Profile 19.0.0.7 with Java EE 8 Full Platform, CouchDB and Cloudant

## End points on running server
GET /calmh/rest/test/ping - ping service to see if the server is running </br>
GET /calmh/rest/test/getCouchDatabase - test service to see the CouchDB/Cloudant database name </br>

GET /calmh/rest/setup/initvalues - setup server with initial data </br>
GET /calmh/rest/setup/samplevalues - setup server with some sample data </br>

GET /calmh/rest/auth/login/{id}/{pw} - do a user authentication </br>

GET /calmh/rest/user/{id} - read user </br>
GET /calmh/rest/user/all - read all users </br>
POST /calmh/rest/user/new - create new user </br>
PUT /calmh/rest/user/{id} - update user </br>
DELETE /calmh/rest/user/{id} - delete user </br>

GET /calmh/rest/disaster/{id} - read disaster event </br>
GET /calmh/rest/disaster/all - read all disaster events </br>
POST /calmh/rest/disaster/new - create disaster event </br>
PUT /calmh/rest/disaster/{id} - update disaster event </br>
DELETE /calmh/rest/disaster/{id} - delete disaster event </br>
