import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReactionsPage } from './reactions.page';
import { ExpandableComponent } from 'src/app/components/expandable/expandable.component';

const routes: Routes = [
  {
    path: '',
    component: ReactionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ReactionsPage,
    ExpandableComponent
  ]
})
export class ReactionsPageModule { }
