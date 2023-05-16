import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map((user) => {
        const isLoggedIn = !!user; // ユーザーが存在すればtrue、存在しなければfalse
        if (!isLoggedIn) {
          this.router.navigate(['/auth/login']); // ログインしていない場合はログインページにリダイレクト
        }
        return isLoggedIn; // ログイン済みの場合は認証を通過
      })
    );
  }
}
