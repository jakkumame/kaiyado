import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { UsualEditPage } from './usual-edit/usual-edit.page';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule } from '@angular/fire/firestore';


const routes: Routes = [
  {
    path: 'usual-edit',
    component: UsualEditPage
  }
];

@NgModule({
  declarations: [
    UsualEditPage
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule,
    FirestoreModule,
  ],
  exports: [
    RouterModule,
  ]

})
export class ReserveModule { }
