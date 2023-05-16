import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'login',
    component: LoginPage,
  }
];

@NgModule({
  declarations: [
    SignupPage,
    LoginPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
