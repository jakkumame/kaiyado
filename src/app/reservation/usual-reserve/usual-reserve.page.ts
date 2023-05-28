import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ReservationModalComponent } from '../../shared/reservation-modal/reservation-modal.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ReserveService } from 'src/app/service/reserve/reserve.service';

@Component({
  selector: 'app-usual-reserve',
  templateUrl: './usual-reserve.page.html',
  styleUrls: ['./usual-reserve.page.scss'],
})
export class UsualReservePage implements OnInit {
  form!: FormGroup;
  churchName: string;
  reservationData: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private reserveService: ReserveService,
    private auth: AngularFireAuth
    ) {

      const formConfig = {
        宿泊人数: ['', Validators.required],
        利用人数: ['', Validators.required],
        朝食24日: ['', Validators.required],
        昼食24日: ['', Validators.required],
        夕食24日: ['', Validators.required],
        宿泊人数24日: ['', Validators.required],
        朝食25日: ['', Validators.required],
        昼食25日: ['', Validators.required],
        夕食25日: ['', Validators.required],
        宿泊人数25日: ['', Validators.required],
        朝食26日: ['', Validators.required],
        昼食26日: ['', Validators.required],
        夕食26日: ['', Validators.required],
        宿泊人数26日: ['', Validators.required],
        チェックイン日: ['', Validators.required],
        チェックイン時間: ['', Validators.required],
        チェックアウト日: ['', Validators.required],
        チェックアウト時間: ['', Validators.required]
      };

      this.form = this.formBuilder.group({
        form1: [ formConfig ],
        form2: [ formConfig ],
        form3: [ formConfig ],
      });

    }

    ngOnInit() {
      // 教会名を取得
      this.auth.user.subscribe((user) => {
        if (user) {
          this.churchName = user.displayName!;
        }
      });
    }

    async openModal(): Promise<void> {
      const modal = await this.modalController.create({
        component: ReservationModalComponent,
        componentProps: {
          reservationData: this.reservationData
        }
      });
      return await modal.present();
    }

    onButtonClick(reservationNumber: string): void {
      const churchName = this.churchName;

      // ここで値をリセット
      const reservationFormControl = this.form.get(reservationNumber) as FormGroup;
      if (reservationFormControl) {
        reservationFormControl.reset();
      }

      this.reserveService.getDocumentData(churchName, reservationNumber, this.form).subscribe((data) => {
        this.reservationData = data;
        this.openModal();
      });
    }


}
