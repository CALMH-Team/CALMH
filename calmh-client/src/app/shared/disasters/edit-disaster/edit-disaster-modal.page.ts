import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { DisasterType } from 'src/app/model/disaster-type';
import { Disaster } from 'src/app/model/disaster';

@Component({
  selector: 'app-edit-disaster',
  templateUrl: './edit-disaster-modal.page.html',
  styleUrls: ['./edit-disaster-modal.page.scss'],
})
export class EditDisasterModalComponent implements OnInit {
  id: string;
  disasterForm: FormGroup;
  disasterTypes: any = Disaster.DISASTER_TYPES;
  newCreated = false;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private restApiSvc: RestApiService,
    private navParams: NavParams
  ) {
    this.validateAndPrefillForm(new Disaster('', new Date(), '', this.disasterTypes[3], ''));
  }

  validateAndPrefillForm(disaster: Disaster) {
    const checked = this.disasterTypes.find(disasterType => disasterType.id === disaster.disasterType);

    this.disasterForm = this.formBuilder.group({
      disasterType: [checked, Validators.required],
      location: [disaster.location, Validators.required],
      date: [disaster.date, Validators.required],
    });
    // https://github.com/ionic-team/ionic/issues/16453
    this.disasterForm.get('disasterType').setValue(disaster.disasterType);
  }

  ionViewWillEnter() {
    this.id = this.navParams.get('id');


    // If theres an ID then use that to load the data to the form
    if (this.id !== '') {
      this.restApiSvc.get('disaster', this.id).subscribe((disaster: Disaster) => {
        this.validateAndPrefillForm(disaster);
      });
    }
  }

  async dismiss() {
    await this.modalController.dismiss(this.newCreated);
  }

  ngOnInit() {
  }

  save() {
    this.restApiSvc.post('disaster', this.disasterForm.value).subscribe((disaster: Disaster) => {
      this.newCreated = true;
      this.dismiss();
    });
  }

}
