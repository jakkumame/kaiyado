import { UsualReserveModalComponent } from './../../shared/usual-reserve-modal/usual-reserve-modal.component';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usual-reserve',
  templateUrl: './usual-reserve.page.html',
  styleUrls: ['./usual-reserve.page.scss'],
})
export class UsualReservePage {

  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: UsualReserveModalComponent,
      backdropDismiss: false,
      animated: true,
    });
    await modal.present();
  }


}
