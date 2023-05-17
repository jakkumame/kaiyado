import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsualReservationEditPage } from './usual-reservation-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UsualReservationEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsualReservationEditPageRoutingModule {}
