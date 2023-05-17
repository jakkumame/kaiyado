import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../shared/material/material.module';

import { IonicModule } from '@ionic/angular';

import { UsualReservationEditPageRoutingModule } from './usual-reservation-edit-routing.module';

import { UsualReservationEditPage } from './usual-reservation-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    UsualReservationEditPageRoutingModule
  ],
  declarations: [UsualReservationEditPage]
})
export class UsualReservationEditPageModule {}
