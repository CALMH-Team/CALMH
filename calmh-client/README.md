# CALMH Client
A Ionic 4 project for Call For Code 2019.

## Requirements
`npm install`

`ionic cordova platform add browser`

`ionic cordova platform add android`

`ionic cordova platform add ios`

## Android build
This assumes that the device has developer mode enabled and install sources can be external to the app store.'

`bash build/build_debug.sh`

## To test on browser:
`ionic serve`

## To test on remote server (bluemix/ibmcloud)
`npm run build:prod`

Use the output files stored in `www` folder , for example these can be served by the server, such as the deployed version in [CALMH @ IBM Cloud](https://calmh-server.mybluemix.net)