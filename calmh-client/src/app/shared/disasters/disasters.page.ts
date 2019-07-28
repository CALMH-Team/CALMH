import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController, ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { OverlayEventDetail } from '@ionic/core';
import { EditDisasterModalComponent } from 'src/app/shared/disasters/edit-disaster/edit-disaster-modal.page';
import { Disaster } from 'src/app/model/disaster';
import { DisasterType } from 'src/app/model/disaster-type';
import { CaseService } from 'src/app/services/case.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-disasters',
  templateUrl: './disasters.page.html',
  styleUrls: ['./disasters.page.scss'],
})
export class DisastersPage implements OnInit {
  public eventForm: FormGroup;
  private loader: any;

  private events: Disaster[];


  constructor(
    private navController: NavController,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private restApiSvc: RestApiService,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private caseSvc: CaseService,
    private authSvc: AuthService
  ) {
    this.eventForm = this.formBuilder.group({
      event: ['', Validators.required]
    });
    this.reload();
  }


  async reload() {

    this.events = [
      new Disaster('new', new Date(), 'location', new DisasterType('New type'), null),
    ];
    // Get the latest disasters.
    this.loader = await this.loadingCtrl.create({
      message: 'Loading events...',
      backdropDismiss: true
    });
    this.loader.present().then(() => {
      this.restApiSvc.getAll('disaster').subscribe((disasters: any[]) => {
        disasters.forEach(disaster => {
          const tryName = Disaster.DISASTER_TYPES.find((disaster2: Disaster) => disaster2.id === disaster.disasterType);
          disaster.disasterType = tryName ? tryName : disaster.disasterType;
          disaster.id = disaster['_id'];
          this.events.push(disaster);
        });
        this.loader.dismiss();
      });
    });
  }

  registerEvent() {
    this.caseSvc.createNewCase();
    this.caseSvc.setUser(this.authSvc.user);
    this.caseSvc.setDisaster(this.events.find(disaster => disaster.id === this.eventForm.get('event').value));
    this.goTo('reactions');
  }

  goTo(page: string) {
    this.navController.navigateForward(page);
  }


  async disasterActionSheet(id: string) {
    if (this.authSvc.isAdmin()) {
      const newButtons = [{
        text: 'Create',
        icon: 'create',
        handler: () => {
          this.editDisaster(id);
        }
      }];
      const existingButtons = [{
        text: 'Modify',
        icon: 'create',
        handler: () => {
          this.editDisaster(id);
        }
      }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.confirmDelete(id);
        }
      }];
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'What do you want to do?',
        buttons: id === 'new' ? newButtons : existingButtons
      });
      await actionSheet.present();
    }
  }

  async confirmDelete(id: string) {
    const prompt = await this.alertCtrl.create({
      header: 'Delete event?',
      message: 'Are you sure you want to delete this event?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.deleteEvent(id);
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

  async deleteEvent(id: string) {
    this.restApiSvc.delete('disaster', id).subscribe(() => {
      this.reload();
    });
  }

  async editDisaster(id: string) {
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: EditDisasterModalComponent,
        componentProps: {
          id
        }
      });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        const newCreated = detail.data;
        if (newCreated) {
          this.reload();
        }
      }
    });

    await modal.present();
  }

  ngOnInit() {
  }

}
