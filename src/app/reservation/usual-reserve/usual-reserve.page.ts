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
    private auth: AngularFireAuth
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
    const churchName = this.churchName
    const documentRef = this.firestore.collection(churchName).doc(`reservation${documentNumber}`);
    documentRef.get().subscribe((doc) => {
      if (doc.exists) {
        this.documentData = doc.data();
      } else {
        console.log('ドキュメントが見つかりませんでした。');
      }
    });
  }


}
