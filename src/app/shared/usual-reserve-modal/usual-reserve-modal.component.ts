import { ReserveService } from 'src/app/service/reserve/reserve.service';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-usual-reserve-modal',
  templateUrl: './usual-reserve-modal.component.html',
  styleUrls: ['./usual-reserve-modal.component.scss'],
})
export class UsualReserveModalComponent {
  @Input() data: any;

  constructor(
    private modalController: ModalController,
    private reserveService: ReserveService,
    private auth: AngularFireAuth
    ) {}

  dismissModal() {
    this.modalController.dismiss();
  }


}






