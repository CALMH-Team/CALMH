import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  private loader: any;

  constructor(
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    private navCtrl: NavController
  ) {
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

    this.authService.setSucessCallback((msg) => {
      if (this.loader) {
        this.loader.dismiss();
      }
    });
    this.authService.setFailureCallback((error) => {
      if (this.loader) {
        this.loader.dismiss();
      }
      if (error !== null) {
        this.showAlert('Login Failure', error);
      } else {
        this.showAlert('Login Failure', 'Failed to login. Please try again.');
      }
    });

    // Subscribe to the auth state and go home if authorized.
    this.authService.authLevel.subscribe(authLevel => {
      if (authLevel) {
        const homePage = this.authService.getHome();
        this.navCtrl.navigateRoot(homePage);
      }
    });

  }

  ngOnInit() {
  }

  async processForm() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.prevalidate(username, password);
    this.loader = await this.loadingCtrl.create({
      message: 'Signining in. Please wait ...',
      backdropDismiss: true,
      duration: 1000
    });
    this.loader.present().then(() => {
      this.authService.login(username, password);
    });
  }

  async showAlert(alertTitle: string, alertMessage: string) {
    const prompt = await this.alertCtrl.create({
      header: alertTitle,
      message: alertMessage,
      buttons: [{
        text: 'Ok',
      }]
    });
    prompt.present();
  }

  private prevalidate(username: string, password: string) {
    if (username === '' || password === '') {
      this.showAlert('Login Failure', 'Username and password are required');
      return;
    }
    if (!this.loginForm.valid) {
      this.showAlert('Incorrect data', 'Username and password must be at least 5 characters long.');
      return;
    }
  }

  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }
}
