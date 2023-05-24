import { Injectable, Optional } from '@angular/core';
import { User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';
import { authState } from 'rxfire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Optional() public auth: Auth,
  ) {}

  // ユーザーのログイン機能
  async login(email: string, password: string): Promise<UserCredential> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error) {
      throw new Error('ログインに失敗しました。');
    }
  }

  // ユーザーのサインアップ機能
  async signup(email: string, password: string): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error) {
      throw new Error('サインアップに失敗しました。');
    }
  }


    // ユーザーのログアウト機能
  logout(): void {
    signOut(this.auth);
  }

    // ユーザーのログイン状態を取得
  getAuthState() {
    return authState(this.auth);
  }

  // 教会名を取得
  getDisplayName() {
    const user: User | null = this.auth.currentUser;
    return user ? user.displayName : null;
  }


}
