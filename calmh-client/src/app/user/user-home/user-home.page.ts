import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { Health } from '@ionic-native/health/ngx';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {
  app = Constants.APP;
  isHeartRateAvailable = false;
  heartRateMessage = 'Unavailable';

  constructor(
    private health: Health,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }


  ngOnInit() {

    /* this.health.isAvailable().then((available: boolean) => {
      this.health.requestAuthorization([
        {
          read: [Constants.HEART_RATE]
        }
      ])
        .then(res => {
          this.heartRateMessage = available ? 'Available' : 'Unavailable';
        })
        .catch(e => {
          this.heartRateMessage += ': ' + e;
        });
    })
      .catch(e => console.log(e));
 */
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

  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

}
