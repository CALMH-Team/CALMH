import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  usersForm: FormGroup;
  loader: any;
  users: User[];

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private restApiSvc: RestApiService,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.reload();
  }


  async reload() {
    // Get the latest disasters.
    this.loader = await this.loadingCtrl.create({
      message: 'Loading users...',
      backdropDismiss: true
    });
    this.loader.present().then(() => {
      this.restApiSvc.getAll('user').subscribe((users: User[]) => {
        this.users = users;
        this.loader.dismiss();
      });
    });
  }

  async confirmDelete(id: string) {
    const prompt = await this.alertCtrl.create({
      header: 'Delete event?',
      message: 'Are you sure you want to delete this event?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.deleteUser(id);
        }
      }, {
        text: 'No',
        handler: () => {
          // Do nothing.
        }
      }]
    });
    prompt.present();
  }

  async deleteUser(id: string) {
    this.restApiSvc.delete('user', id).subscribe(() => {
      this.reload();
    });
  }

  ngOnInit() {
  }

}
