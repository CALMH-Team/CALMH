import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.page.html',
  styleUrls: ['./personal-data.page.scss'],
})
export class PersonalDataPage implements OnInit {
  personalDataForm: FormGroup;
  saveButtonLabel: string;
  loader: any;
  genders = [
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' },
    { label: 'Other', value: 'o' }
  ];

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private restApi: RestApiService,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController
  ) {

    this.prefillAndValidateForm(new User('', '', '', ''));
    if (authSvc.isAuthenticated()) {
      restApi.get('user', authSvc.user.id).subscribe((user: User) => {
        this.prefillAndValidateForm(user);
      });
    }

  }

  async showLoading(thenFn) {

    // Get the latest cases.
    this.loader = await this.loadingCtrl.create({
      message: 'Loading data...',
      backdropDismiss: true
    });
    this.loader.present().then(() => {
      thenFn();
    });
  }

  prefillAndValidateForm(formData: any) {
    this.personalDataForm = this.formBuilder.group({
      username: [{ value: formData.username, disabled: (formData.username !== '') }, Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      password: [{ value: formData.password, disabled: (formData.username !== '') }, Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      email: [formData.email, Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      firstname: [formData.firstname, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])],
      lastname: [formData.lastname, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])],
      age: [formData.age, Validators.required],
      gender: [formData.gender, Validators.required]
    });
  }

  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

  save() {
    this.showLoading(() => {
      this.restApi.post('user', this.personalDataForm.value).subscribe((user: User) => {
        this.authSvc.login(
          this.personalDataForm.get('username').value,
          this.personalDataForm.get('password').value
        ).then(
          this.loader.dismiss()
        );
      });
    }
    );
  }

  update() {
    if (this.authSvc.isAuthenticated()) {
      this.showLoading(() => {
        this.restApi.put('user', this.authSvc.user.id, this.personalDataForm.value).subscribe(() => {
          this.loader.dismiss();
        });
      });
    } else {
      this.save();
    }
  }

  ngOnInit() {
    // Get personal data
    if (this.authSvc.isAuthenticated()) {
      this.saveButtonLabel = 'Update personal data';
    } else {
      this.saveButtonLabel = 'Create account';
    }
  }
}
