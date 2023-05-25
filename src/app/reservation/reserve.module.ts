import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { UsualEditPage } from './usual-edit/usual-edit.page';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module'
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule  } from '@angular/fire/compat/firestore';
import { SharedModule } from '../shared/shared.module';
import { UsualReservePage } from './usual-reserve/usual-reserve.page';




const routes: Routes = [
  {
    path: 'usual-edit',
    component: UsualEditPage
  },
  {
    path: 'usual-reserve',
    component: UsualReservePage
  },
];

@NgModule({
  declarations: [
    UsualEditPage,
    UsualReservePage
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IonicModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    SharedModule
  ],
  exports: [
    RouterModule,
  ]

})
export class ReserveModule { }
