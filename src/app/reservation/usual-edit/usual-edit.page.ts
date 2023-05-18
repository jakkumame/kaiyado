import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-usual-edit',
  templateUrl: './usual-edit.page.html',
  styleUrls: ['./usual-edit.page.scss'],
})
export class UsualEditPage {
  form: FormGroup;
  title: string;
  checkInDates: Date[] = [];
  checkOutDates: Date[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      利用人数: ['1'],
      宿泊人数: ['1'],
      朝食24日: ['1'],
      昼食24日: ['1'],
      夕食24日: ['1'],
      宿泊人数24日: ['1'],
      朝食25日: ['1'],
      昼食25日: ['1'],
      夕食25日: ['1'],
      宿泊人数25日: ['1'],
      朝食26日: ['1'],
      昼食26日: ['1'],
      夕食26日: ['1'],
      宿泊人数26日: ['1'],
      チェックイン日: [''],
      チェックイン時間: [''],
      チェックアウト日: [''],
      チェックアウト時間: ['']
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

}
