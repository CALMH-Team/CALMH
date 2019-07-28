import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Disaster } from 'src/app/model/disaster';
import { Case } from 'src/app/model/case';
import { User } from 'src/app/model/user';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-edit-case-modal',
  templateUrl: './edit-case-modal.page.html',
  styleUrls: ['./edit-case-modal.page.scss'],
})
export class EditCaseModalComponent implements OnInit {
  id: string;
  emptyCtrl = { id: '', label: '' };
  caseForm: FormGroup;
  volunteers: User[];
  user = this.emptyCtrl;
  volunteer = this.emptyCtrl;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private restApiSvc: RestApiService,
    private navParams: NavParams,
    private caseSvc: CaseService
  ) {
    this.caseForm = this.formBuilder.group({
      volunteer: [],
      user: [this.emptyCtrl, Validators.required],
      disaster: [this.emptyCtrl, Validators.required],
      reactions: [this.emptyCtrl, Validators.required],
      recommendations: [this.emptyCtrl, Validators.required],
      startDate: [this.emptyCtrl, Validators.required],
      endDate: [this.emptyCtrl, Validators.required]
    });
  }

  validateAndPrefillForm(aCase: Case) {
    let user: User;
    // Get the user and volunteers
    this.restApiSvc.getAll('user').subscribe((users: User[]) => {
      this.volunteers = users;
      user = users.find((user: User) => aCase && user['_id'] === aCase.user.id);

      this.caseForm.get('volunteer').setValue(aCase.volunteer ? aCase.volunteer.id : this.emptyCtrl);
      this.caseForm.get('user').setValue(aCase.user.label);
      this.caseForm.get('disaster').setValue(aCase.disaster.label);
      let reactions = '';
      Object.keys(aCase.reactions).forEach(key => {
        if (aCase.reactions[key] === true) {
          reactions += key + ', ';
        } else {
          reactions += key + ': ' + aCase.reactions[key];
        }
      });
      this.caseForm.get('reactions').setValue(reactions);
      this.caseForm.get('recommendations').setValue(JSON.stringify(aCase.recommendations));
      this.caseForm.get('startDate').setValue(aCase.startDate);
      this.caseForm.get('endDate').setValue(aCase.endDate);
    });

  }

  ionViewWillEnter() {
    this.id = this.navParams.get('id');


    // If theres an ID then use that to load the data to the form
    if (this.id !== '') {
      this.restApiSvc.get('case', this.id).subscribe((aCase: Case) => {
        this.validateAndPrefillForm(aCase);
      });
    }
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

  update() {
    const updatedCase = new Case();
    const volunteer = this.volunteers.find((user: User) => user['_id'] === this.caseForm.get('volunteer').value);

    updatedCase['_id'] = this.id;
    updatedCase.volunteer = { id: volunteer['_id'], label: volunteer.firstName + ' ' + volunteer.lastName };
    this.restApiSvc.put('case', this.id, updatedCase).subscribe(() => {
      this.dismiss();
    });
  }
}
