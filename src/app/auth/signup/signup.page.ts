// signup.page.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async signUp() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      try {
        await this.authService.signup(email, password);
        console.log('サインアップに成功しました。');
        // サインアップ成功後の処理を追加する場合はここに記述します
        this.router.navigateByUrl('/auth/login')
      } catch (error) {
        console.error('サインアップに失敗しました。', error);
        // サインアップ失敗時の処理を追加する場合はここに記述します
      }
    }
  }
}
