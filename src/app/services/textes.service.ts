import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';
import { Texte } from '../models/texte';

@Injectable({
  providedIn: 'root'
})
export class TextesService {

  api = environment.api;
  textes: Texte[] = [];

  textesubject = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getTextesFromServer();
  }

  emitTextes() {
    this.textesubject.next(this.textes);
  }

  async getTextesFromServer() {
    const url = `${environment.api + "categtableaux/"}`;
    console.log(url);
    this.http.get<Texte[]>(url).subscribe(
      (data) => {
        console.log(typeof (data));
        console.log(data);
        this.textes = data;
        this.emitTextes();
      },
      (error) => {
        console.log("erreur =>");
        console.log(error);
      }
    );
  }

  // getTextesByPageFromServer(page: string): void {
  //   const url = `${environment.api + "gettextes.php/?page=" + page}`;
  //   console.log(url);

  //   this.http.get(url).subscribe(
  //     (result: Result) => {
  //       console.log(result);
  //       this.textes = result.args;
  //       this.emitTextes();
  //     },
  //     (error) => {
  //       console.log('error : ' + error);
  //     }
  //   );
  // }

}
