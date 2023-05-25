import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



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
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router,
    ) {
    this.form1 = this.formBuilder.group({
      宿泊人数: ['', Validators.required ],
      利用人数: ['', Validators.required ],
      朝食24日: ['', Validators.required ],
      昼食24日: ['', Validators.required ],
      夕食24日: ['', Validators.required ],
      宿泊人数24日: ['', Validators.required ],
      朝食25日: ['', Validators.required ],
      昼食25日: ['', Validators.required ],
      夕食25日: ['', Validators.required ],
      宿泊人数25日: ['', Validators.required ],
      朝食26日: ['', Validators.required ],
      昼食26日: ['', Validators.required ],
      夕食26日: ['', Validators.required ],
      宿泊人数26日: ['', Validators.required ],
      チェックイン日: ['', Validators.required ],
      チェックイン時間: ['', Validators.required ],
      チェックアウト日: ['', Validators.required ],
      チェックアウト時間: ['', Validators.required ],
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

  ngOnInit() {
    // 教会名を取得
    this.auth.user.subscribe((user) => {
      if (user) {
        this.churchName = user.displayName!;
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
    const collectionName = this.churchName;

    this.firestore.collection(collectionName).doc('reservation1').set(formValue)
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.error('a', error);
      });
  }
  saveToFirestore2() {
    const formValue = this.form2.value;
    const collectionName = this.churchName;

    this.firestore.collection(collectionName).doc('reservation2').set(formValue)
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.error('a', error);
      });
  }
  saveToFirestore3() {
    const formValue = this.form3.value;
    const collectionName = this.churchName;

    this.firestore.collection(collectionName).doc('reservation3').set(formValue)
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        console.error('a', error);
      });
  }

}
