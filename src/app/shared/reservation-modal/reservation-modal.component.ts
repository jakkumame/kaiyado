import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'


@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss'],
})
export class ReservationModalComponent  {
  @Input()documentData : any;

  constructor(private modalController: ModalController) {}

  closeModal(): void {
    this.modalController.dismiss();
  }
}
