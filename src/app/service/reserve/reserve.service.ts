import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  constructor(
    private angularFirestore: AngularFirestore,
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router
    ) {}

    createCollection(churchName: string) {
      const collectionRef = this.angularFirestore.collection(churchName);

      const docData = { /* ドキュメントのデータ */ };

      collectionRef.doc('reservation1').set(docData);
      collectionRef.doc('reservation2').set(docData);
      collectionRef.doc('reservation3').set(docData);
    }



    getDocumentData(churchName: string, reservationNumber: string, form: FormGroup) {
      const collectionName = churchName;

      this.firestore.collection(collectionName).doc<any>(reservationNumber).get()
        .subscribe((snapshot: DocumentSnapshot<any>) => {
          const data = snapshot.data();
          form.setValue(data);
        });
    }




    saveToFirestore(churchName: string, formValue: {}, reservationNumber: string) {
      const collectionName = churchName;

      this.firestore.collection(collectionName).doc(reservationNumber).set(formValue)
        .then(() => {
          this.router.navigateByUrl('/home');
        })
        .catch((error) => {
          console.error(error);
        });
    }

}
