import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-usual-reserve',
  templateUrl: './usual-reserve.page.html',
  styleUrls: ['./usual-reserve.page.scss'],
})
export class UsualReservePage implements OnInit {
  documentData: any;
  churchName: string;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private datePipe: DatePipe
    ) {

    }

  ngOnInit() {
    // 教会名を取得
    this.auth.user.subscribe((user) => {
      if (user) {
        this.churchName = user.displayName!;
      }
    });
  }

  getData(documentNumber: number) {
    const churchName = this.churchName;
    const documentRef = this.firestore.collection(churchName).doc(`reservation${documentNumber}`);

    documentRef.get().subscribe((doc) => {
      if (doc.exists) {
        this.documentData = doc.data();
        this.formatDateTime();
      } else {
        console.log('ドキュメントが見つかりませんでした。');
      }
    });
  }


  formatDateTime() {
    this.documentData['チェックアウト日'] = this.formatDate(this.documentData['チェックアウト日']);
    this.documentData['チェックイン日'] = this.formatDate(this.documentData['チェックイン日']);

    this.documentData['チェックアウト時間'] = this.formatTime(this.documentData['チェックアウト時間']);
    this.documentData['チェックイン時間'] = this.formatTime(this.documentData['チェックイン時間']);
  }

  formatDate(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'MM月dd日');
    return formattedDate || '';
  }

  formatTime(time: any): string {
    if (time && typeof time === 'string') {
      const parts = time.split(':');
      if (parts.length === 2) {
        const hour = parts[0];
        const minute = parts[1];
        return `${hour}:${minute}`;
      }
    }
    return '';
  }
}
