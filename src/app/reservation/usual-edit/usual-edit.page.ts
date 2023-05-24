import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-usual-edit',
  templateUrl: './usual-edit.page.html',
  styleUrls: ['./usual-edit.page.scss'],
})
export class UsualEditPage {
  activeTab = 1;


  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  title: string;
  checkInDates: Date[] = [];
  checkOutDates: Date[] = [];

  constructor(
    private formBuilder: FormBuilder,
    ) {
    this.form1 = this.formBuilder.group({
      宿泊人数: ['', Validators.required, Validators.min(0) ],
      利用人数: ['', Validators.required, Validators.min(1) ],
      朝食24日: ['', Validators.required, Validators.min(0) ],
      昼食24日: ['', Validators.required, Validators.min(0) ],
      夕食24日: ['', Validators.required, Validators.min(0) ],
      宿泊人数24日: ['', Validators.required, Validators.min(0) ],
      朝食25日: ['', Validators.required, Validators.min(0) ],
      昼食25日: ['', Validators.required, Validators.min(0) ],
      夕食25日: ['', Validators.required, Validators.min(0) ],
      宿泊人数25日: ['', Validators.required, Validators.min(0) ],
      朝食26日: ['', Validators.required, Validators.min(0) ],
      昼食26日: ['', Validators.required, Validators.min(0) ],
      夕食26日: ['', Validators.required, Validators.min(0) ],
      宿泊人数26日: ['', Validators.required, Validators.min(0) ],
      チェックイン日: ['', Validators.required ],
      チェックイン時間: ['', Validators.required ],
      チェックアウト日: ['', Validators.required ],
      チェックアウト時間: ['', Validators.required ]
    });
    this.form2 = this.formBuilder.group({
      宿泊人数: ['', Validators.required, Validators.min(0) ],
      利用人数: ['', Validators.required, Validators.min(1) ],
      朝食24日: ['', Validators.required, Validators.min(0) ],
      昼食24日: ['', Validators.required, Validators.min(0) ],
      夕食24日: ['', Validators.required, Validators.min(0) ],
      宿泊人数24日: ['', Validators.required, Validators.min(0) ],
      朝食25日: ['', Validators.required, Validators.min(0) ],
      昼食25日: ['', Validators.required, Validators.min(0) ],
      夕食25日: ['', Validators.required, Validators.min(0) ],
      宿泊人数25日: ['', Validators.required, Validators.min(0) ],
      朝食26日: ['', Validators.required, Validators.min(0) ],
      昼食26日: ['', Validators.required, Validators.min(0) ],
      夕食26日: ['', Validators.required, Validators.min(0) ],
      宿泊人数26日: ['', Validators.required, Validators.min(0) ],
      チェックイン日: ['', Validators.required ],
      チェックイン時間: ['', Validators.required ],
      チェックアウト日: ['', Validators.required ],
      チェックアウト時間: ['', Validators.required ]
    });
    this.form3 = this.formBuilder.group({
      宿泊人数: ['', Validators.required, Validators.min(0) ],
      利用人数: ['', Validators.required, Validators.min(1) ],
      朝食24日: ['', Validators.required, Validators.min(0) ],
      昼食24日: ['', Validators.required, Validators.min(0) ],
      夕食24日: ['', Validators.required, Validators.min(0) ],
      宿泊人数24日: ['', Validators.required, Validators.min(0) ],
      朝食25日: ['', Validators.required, Validators.min(0) ],
      昼食25日: ['', Validators.required, Validators.min(0) ],
      夕食25日: ['', Validators.required, Validators.min(0) ],
      宿泊人数25日: ['', Validators.required, Validators.min(0) ],
      朝食26日: ['', Validators.required, Validators.min(0) ],
      昼食26日: ['', Validators.required, Validators.min(0) ],
      夕食26日: ['', Validators.required, Validators.min(0) ],
      宿泊人数26日: ['', Validators.required, Validators.min(0) ],
      チェックイン日: ['', Validators.required ],
      チェックイン時間: ['', Validators.required ],
      チェックアウト日: ['', Validators.required ],
      チェックアウト時間: ['', Validators.required ]
    });
    // チェックイン・アウト日の最小値と最大値を設定
    this.generateDates();
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

  saveData() {}

}
