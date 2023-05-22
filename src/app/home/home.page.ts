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
    private router: Router
    ) {}

  logOut() {
    this.authService.logout();
    // ログイン画面にリダイレクト
    this.router.navigateByUrl('/auth/login');
  }


}
