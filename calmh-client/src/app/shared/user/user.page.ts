import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
/**
 * Should ask for 
 * First Name, Last Name
 * Age
 * Sex
 * 
 * Preexisting / chronic conditions
 * 
 * Button shuold be Update when logged in, Save when registering.
 */
export class UserPage implements OnInit {
  public personalDataForm: FormGroup;
  private genders = [
    {
      label: 'Male',
      value: 'm'
    },
    {
      label: 'Female',
      value: 'f'
    }
  ];

  constructor(public router: Router, public formBuilder: FormBuilder) {

    this.personalDataForm = formBuilder.group({
      firstName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])],
      age: [1, Validators.compose([
        Validators.min(1),
        Validators.max(120),
        Validators.required
      ])],
      sex: ['m', Validators.required]
    });
  }

  onSignIn() {
    console.log('what is goin on');
    console.log(this.personalDataForm.value);
    this.router.navigateByUrl('/referring-physician');
  }

  goTo(page: string) {
    this.router.navigateByUrl(page);
  }

  ngOnInit() {
  }

}
