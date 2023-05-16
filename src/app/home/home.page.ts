import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private router: Router) {}

  logOut() {
    this.authService.logout()
      .then(() => {
        // ログアウト成功時の処理
        console.log('ログアウト成功');
        // ログイン画面にリダイレクト
        this.router.navigateByUrl('/auth/login');

      })
      .catch((error) => {
        // ログアウト失敗時の処理
        console.error('ログアウト失敗:', error);
        // エラーメッセージの表示などを行うことができます
      });
  }
}
