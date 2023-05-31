import gapiScript from 'gapi-script';




import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {
  private apiKey: string;

  constructor() {
    this.apiKey = environment.googleApiKey; // 環境ファイルからAPIキーを取得
    gapiScript.load('client', () => {
      gapiScript.client.init({
        apiKey: this.apiKey,
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(() => {
        gapiScript.client.load('sheets', 'v4');
      });
    });
  }
}
