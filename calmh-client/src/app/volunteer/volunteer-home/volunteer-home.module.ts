import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VolunteerHomePage } from './volunteer-home.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteerHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VolunteerHomePage],
  exports: [VolunteerHomePage]
})
export class VolunteerHomePageModule { }
