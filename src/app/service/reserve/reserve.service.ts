import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  constructor(private angularFirestore: AngularFirestore) {}

  getDataFromFirestore(docId: string) {
    return this.angularFirestore.doc<any>('fukube1/' + docId).valueChanges();
  }

  saveDataToFirestore(docId: string, data: any) {
    return this.angularFirestore.doc('fukube1/' + docId).set(data);
  }
}
