import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    public http: HttpClient,
    ) {}

  createCollection(churchName: string) {
    const collectionRef = this.firestore.collection(churchName);

    const docData = { /* ドキュメントのデータ */ };

    collectionRef.doc('reservation1').set(docData);
    collectionRef.doc('reservation2').set(docData);
    collectionRef.doc('reservation3').set(docData);
  }



  getDocumentData(churchName: string, reservationNumber: string, form: FormGroup): Observable<any> {
    const collectionName = churchName;

    return new Observable<any>((observer) => {
      this.firestore.collection(collectionName).doc<any>(reservationNumber).get()
        .subscribe((snapshot: DocumentSnapshot<any>) => {
          const data = snapshot.data();
          form.setValue(data);
          // Observableで返す
          observer.next(data);
          observer.complete();
        }, (error) => {
          observer.error(error);
        });
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
