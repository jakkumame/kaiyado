import { Injectable, Optional } from '@angular/core';
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw new Error('ログアウトに失敗しました。');
    }
  }

    // ユーザーのログイン状態を取得
  getAuthState() {
    return authState(this.auth);
  }


}
