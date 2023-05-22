import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileModalComponent } from '../shared/profile-modal/profile-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController
    ) {}

  async ngOnInit(): Promise<void> {
    const displayName = this.authService.getDisplayName();

    if (displayName === null) {
      // モーダルの表示処理を実装する
      const modal = await this.modalCtrl.create({
        component: ProfileModalComponent,
        backdropDismiss: false,
        animated: true,
      });
      await modal.present();
    }
  }



  logOut() {
    this.authService.logout();
    // ログイン画面にリダイレクト
    this.router.navigateByUrl('/auth/login');
  }


}
