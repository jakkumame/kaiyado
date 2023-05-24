import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {
  constructor(
    private angularFirestore: AngularFirestore,
    private authService: AuthService,
    ) {}

    createCollection(churchName: string) {
      const collectionRef = this.angularFirestore.collection(churchName);

      const docData = { /* ドキュメントのデータ */ };

      collectionRef.doc('reservation1').set(docData);
      collectionRef.doc('reservation2').set(docData);
      collectionRef.doc('reservation3').set(docData);
    }
}
