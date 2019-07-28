import { Component, OnInit } from '@angular/core';
import { HealthCondition } from 'src/app/model/health-condition';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chronic-conditions',
  templateUrl: './chronic-conditions.page.html',
  styleUrls: ['./chronic-conditions.page.scss'],
})
export class ChronicConditionsPage implements OnInit {
  private conditionsForm: FormGroup;
  private conditions: HealthCondition[] = [
    new HealthCondition('Cancer', 'cancer'),
    new HealthCondition('Diabetes', 'diabetes'),
    new HealthCondition('Alzheimer', 'alzheimer'),
    new HealthCondition('Parkinson\'s disease', 'parkinson'),
  ];

  constructor(
    private navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.conditionsForm = formBuilder.group({
      conditionList: ['', Validators.required]
    });
  }

  update() {
    console.log('TODO: send to server');
  }

  goTo(page: string) {
    this.navCtrl.navigateForward(page);
  }

  ngOnInit() {
  }

}
