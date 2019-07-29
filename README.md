
# Welcome to CALMH repository

Before going to the deployed aplication and docs please watch our 3 mins youtube video to understand the main componentes and workflows [here](https://youtu.be/cw09159cyII)

## Project documentation:
1. [Project description](./projectFiles/CALMH_ProjectDescription.pdf)
2. [Architecture diagrams](./projectFiles/CALMH_ArchitectureDiagram.pdf)
3. [Project roadmap](./projectFiles/CALMH_roadmap.pdf)
4. [Project overview and workflows](./projectFiles/CALMH_overview.pdf)
6. Team Members
    - Sebastianus Bekker (sebastianus_bekker@persistent.com)
    - Roberto Mosqueda (roberto_mosqueda@persistent.com)
    - Luis Peregrina (luis_andrade@persistent.com)
    - Aldo Vargas (aldo_vargas@persistent.com)
    - Amilcar Yanez (amilcar_yanez@persistent.com)


## Project implementation
Both client and server implementations are in this repository: calmh-client and calmh-server.

### Mobile client platform
We use the Ionic 4 framework for application development; this framework uses Angular 7 with TypeScript for the code, CSS preprocessing using SASS. Ionic leverages the application building duties to Apache Cordova, which in turn uses Node.js as its backbone, connecting to the Node.js & Cloudant application we developed on IBM Cloud.

The Chat application is made using SocketIO, and integrated into the REST API server. We also make use of a Health library that allowed us to gather health data, such as Heart Rate, from the Google Health system, which we use for user health diagnostics.

The benefit of using a Cordova based framework is that the application can run in a browser, Android device and even an iOS device.

See [Client ReadMe](./calmh-client/README.md) for usage instructions.

#### Test mobile client
We have generated an APK ready to be installed in Android devices. First you need to enable "Install from External Source" or similar in your device. Each device manufacturer has this option somewhere in the device's settings, see [How to enable APK installs on your Android device](https://www.expressvpn.com/support/vpn-setup/enable-apk-installs-android/). Once you are able to install from external sources, download and install the [CALMH application](./projectFiles/CALMH-debug.apk).

### Server
A NodeJS project that uses Express to handle HTTP requests & SockeIO for the chat functionality.
See [Server ReadMe](./calmh-server/README.md) for usage instructions.

### Deployment Environment
Link to the CALMH-Server and CALMH-Client deployed @ IBM Cloud: [https://calmh-server.mybluemix.net/](https://calmh-server.mybluemix.net/)

The client cannot be deployed in the cloud due to a memory limitation. See [Mobile client](#test-mobile-client) to install the app in an Android device.

**Test users:**
1. Admin:
admin/admin
2. Volunteer User:
volunteer/volunteer
3. Patient:
Patients can be register as New user (anonymous login was not implemented).

### Cloud services
To provide a more robust and more scalable back-end production environment, the Node.js REST services implementation switches to a Liberty Application Server JAX-RS  setup still using Cloudant for storage. This is wrapped in IBM API Connect layer using a microservices pattern to provide the appropriate entry points for either the mobile application for users, or the web application used by admins and volunteers. Oauth user authentication is provided by either IBM App ID or interfacing with Facebook/Google, and user identity session is maintained through JSON Web Tokens. This whole back-end infrastructure runs on IBM Cloud.

[Initial implementation](./calmh-server-liberty)


