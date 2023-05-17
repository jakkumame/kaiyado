import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsualEditPage } from './usual-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UsualEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsualEditPageRoutingModule {}
