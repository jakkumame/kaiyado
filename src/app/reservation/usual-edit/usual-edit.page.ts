import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReserveService } from '../../service/reserve/reserve.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-usual-edit',
  templateUrl: './usual-edit.page.html',
  styleUrls: ['./usual-edit.page.scss'],
})
export class UsualEditPage implements OnInit {
  activeTab = 1;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  title: string;
  checkInDates: Date[] = [];
  checkOutDates: Date[] = [];
  churchName: string;

  constructor(
    private formBuilder: FormBuilder,
    private reserveService: ReserveService,
    private auth: AngularFireAuth,
    private router: Router
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

    this.form1 = this.formBuilder.group(formConfig);
    this.form2 = this.formBuilder.group(formConfig);
    this.form3 = this.formBuilder.group(formConfig);
  }

  ngOnInit() {
    // 教会名を取得
    this.auth.user.subscribe((user) => {
      if (user) {
        this.churchName = user.displayName!;
        // 使用例
        this.reserveService.getDocumentData(this.churchName, 'reservation1', this.form1);
        this.reserveService.getDocumentData(this.churchName, 'reservation2', this.form2);
        this.reserveService.getDocumentData(this.churchName, 'reservation3', this.form3);

        this.generateDates();
      }
    });
  }

  generateDates() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    for (let i = 24; i <= 26; i++) {
      const date = new Date(currentYear, currentMonth, i);
      this.checkInDates.push(date);
      this.checkOutDates.push(date);
    }
  }

  saveToFirestore1() {
    const formValue = this.form1.value;
    this.reserveService.saveToFirestore(this.churchName, formValue, 'reservation1');
  }

  saveToFirestore2() {
    const formValue = this.form2.value;
    this.reserveService.saveToFirestore(this.churchName, formValue, 'reservation2');
  }

  saveToFirestore3() {
    const formValue = this.form3.value;
    this.reserveService.saveToFirestore(this.churchName, formValue, 'reservation3');
  }
}

