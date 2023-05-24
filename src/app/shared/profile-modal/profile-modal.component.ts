import { ReserveService } from 'src/app/service/reserve/reserve.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { churchList } from './churchlist';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent {
  selectedItem: string;
  churchList = churchList;

  constructor(
    private afAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private reserveService: ReserveService,
    ) { }

  saveDisplayName() {
    const displayName = this.selectedItem;
    this.afAuth.currentUser.then(user => {
      if (user) {
        user.updateProfile({ displayName: displayName });
        this.reserveService.createCollection(displayName);
        this.modalCtrl.dismiss();
      }
    });
  }

}
