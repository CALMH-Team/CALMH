import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditDisasterModalComponent } from './edit-disaster-modal.page';

const routes: Routes = [
    {
        path: '',
        component: EditDisasterModalComponent
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
    declarations: [EditDisasterModalComponent]
})
export class EditDisasterModalModule { }
