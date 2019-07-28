import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.setLogoutCallback(() => {
      this.navCtrl.navigateRoot(Constants.LOGIN_URL);
    });
    this.authService.logout();
  }
}
