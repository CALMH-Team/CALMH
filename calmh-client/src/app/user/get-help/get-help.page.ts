import { Component, OnInit } from '@angular/core';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.page.html',
  styleUrls: ['./get-help.page.scss'],
})
export class GetHelpPage implements OnInit {
  messages = [];
  nickname = '';
  message = '';

  constructor(
    private uniqueDeviceID: UniqueDeviceID,
    private socket: Socket,
    private toastCtrl: ToastController,
    private authSvc: AuthService
  ) {

  }

  sendMessage() {
    this.socket.emit('add-message', {
      text: this.message
    });
    this.message = '';
  }

  getMessages() {
    const observable = new Observable(observer => {
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
    });
    return observable;
  }

  getUsers() {
    const observable = new Observable(observer => {
      this.socket.on('users-changed', (data: any) => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    const nickname = this.authSvc.user.username;
    this.start(nickname);
    /* this.uniqueDeviceID.get().then((uuid: any) => {
      nickname = uuid;
    }).finally(() => {
      this.start(nickname);
    }); */
  }

  private start(uuid) {

    this.socket.connect();
    this.nickname = uuid;
    this.socket.emit('set-nickname', this.nickname);
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe((data: { user: any, event: string }) => {
      const user = data.user;
      if (data.event === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });
  }
}
