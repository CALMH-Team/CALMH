import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { Health } from '@ionic-native/health/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Constants } from './constants';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicGestureConfig } from './hacks/ionic-gesture-config';
import { EditDisasterModalModule } from './shared/disasters/edit-disaster/edit-disaster-modal.module';
import { EditCaseModalModule } from './shared/cases/edit-case-modal/edit-case-modal.module';
import { CaseService } from './services/case.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    SocketIoModule.forRoot(Constants.SOCKET_IO_CONFIG),
    EditDisasterModalModule,
    EditCaseModalModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    AuthGuardService,
    UniqueDeviceID,
    Health,
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig },
    CaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
