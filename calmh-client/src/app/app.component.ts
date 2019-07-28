import { Component } from '@angular/core';

import { Platform, MenuController, AlertController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private static ADMINISTRATOR_PAGES = [
    { title: 'Home', url: Constants.url(Constants.HOMEPAGE_ADMIN), icon: 'home' },
    { title: 'Conditions', url: '/conditions', icon: 'book' },
    { title: 'Disasters', url: '/disasters', icon: 'warning' },
    { title: 'Users', url: '/users', icon: 'person' },
    { title: 'Cases', url: '/cases', icon: 'chatboxes' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Logout', url: Constants.url(Constants.LOGOUT_URL), icon: 'log-out' }
  ];

  private static VOLUNTEER_PAGES = [
    { title: 'Home', url: Constants.url(Constants.HOMEPAGE_VOLUNTEER), icon: 'home' },
    { title: 'Cases', url: '/cases', icon: 'chatboxes' },
    { title: 'Chat', url: '/get-help', icon: 'help-buoy' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Logout', url: Constants.url(Constants.LOGOUT_URL), icon: 'log-out' }
  ];

  private static USER_PAGES = [
    { title: 'Home', url: Constants.url(Constants.HOMEPAGE_USER), icon: 'home' },
    { title: 'Personal Data', url: '/personal-data', icon: 'contact' },
    { title: 'Chronic conditions', url: '/chronic-conditions', icon: 'book' },
    { title: 'Disasters', url: '/disasters', icon: 'warning' },
    { title: 'Reactions', url: '/reactions', icon: 'add-circle' },
    { title: 'Actions and recommendations', url: '/recommendations', icon: 'chatboxes' },
    { title: 'Get Help', url: '/get-help', icon: 'help-buoy' },
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Logout', url: Constants.url(Constants.LOGOUT_URL), icon: 'log-out' }
  ];

  appPages: any;
  loginForm: FormGroup;
  loader: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder,
    public authService: AuthService
  ) {
    this.initializeApp();
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // Subscribe to a state change on auth, do not use navCtrl here.
      this.authService.authLevel.subscribe(authLevel => {
        if (this.authService.isUser()) {
          this.showMenu();
          this.appPages = AppComponent.USER_PAGES;
          if (this.authService.isVolunteer()) {
            this.appPages = AppComponent.VOLUNTEER_PAGES;
            if (this.authService.isAdmin()) {
              this.appPages = AppComponent.ADMINISTRATOR_PAGES;
            }
          }
        } else {
          // Unauthenticated
          this.hideMenu();
        }
      });
    });
  }

  private hideMenu() {
    this.menuCtrl.enable(false);
  }

  private showMenu() {
    this.menuCtrl.enable(true);
  }

}
