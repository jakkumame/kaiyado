import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UsualEditPage } from './usual-edit/usual-edit.page';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

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
    RouterModule.forRoot(routes),
    CommonModule,
    IonicModule,
    MaterialModule,
  ],
  exports: [
    RouterModule,
  ]

})
export class ReserveModule { }
