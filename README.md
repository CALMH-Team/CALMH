
### Welcome to CALMH repository

Before going to the deployed aplication and docs please watch our 3 mins youtube video to understand the main componentes and workflows [here](https://)

### Project documentation:
1. Project description
2. Architecture diagrams
3. Project roadmap
4. Project workflows
5. Team Members
    - Sebastianus Bekker (sebastianus_bekker@persistent.com)
    - Roberto Mosqueda (roberto_mosqueda@persistent.com)
    - Luis Peregrina (luis_andrade@persistent.com)
    - Aldo Vargas (aldo_vargas@persistent.com)
    - Amilcar Yanez (amilcar_yanez@persistent.com)

**Can be found here [here](https://github.com/CALMH-Team/CALMH/tree/master/projectFiles)**

### Deployment Environment
Link to the Cloudant service in IBM Cloud:
[https://calmh-server.mybluemix.net/](https://calmh-server.mybluemix.net/)

**Test users:**
1. Admin:
admin/admin
2. Volunteer User:
volunteer/volunteer
3. Patient:
Patients can be register as New user and/or use the application as anonymous.

### Mobile Platform
We use the Ionic 4 framework for application development; this framework uses Angular 7 with TypeScript for the code, CSS preprocessing using SASS. Ionic leverages the application building duties to Apache Cordova, which in turn uses Node.js as its backbone, connecting to the Node.js & Cloudant application we developed on IBM Cloud.
The Chat application is made using SocketIO, and integrated into the REST API server. We also make use of a Health library that allowed us to gather health data, such as Heart Rate, from the Google Health system, which we use for user health diagnostics.
    

### Cloud services
To provide a more robust and more scalable back-end production environment, the Node.js REST services implementation switches to a Liberty Application Server JAX-RS  setup still using Cloudant for storage. This is wrapped in IBM API Connect layer using a microservices pattern to provide the appropriate entry points for either the mobile application for users, or the web application used by admins and volunteers. Oauth user authentication is provided by either IBM App ID or interfacing with Facebook/Google, and user identity session is maintained through JSON Web Tokens. This whole back-end infrastructure runs on IBM Cloud.


