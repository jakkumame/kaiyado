import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsualEditPageRoutingModule } from './usual-edit-routing.module';

import { UsualEditPage } from './usual-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsualEditPageRoutingModule
  ],
  declarations: [UsualEditPage]
})
export class UsualEditPageModule {}
