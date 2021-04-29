import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';
import { Tableau } from '../models/tableau';


@Injectable({
  providedIn: 'root'
})
export class TableauxService {


  tableaux: Tableau[] = [];
  productSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getTableauxFromServer();
  }

  emitTableaux() {
    this.productSubject.next(this.tableaux);
  }

  getTableauxFromServer() {
    const url = `${environment.api + 'tableaux/'}`;
    console.log(url);
    return this.http.get<any>(url).subscribe(
      (data: Result) => {
        console.log(data);
        this.tableaux = data.args;
        this.emitTableaux();
      },
      (error) => {
        console.log(error);
      }
    )
  }


}
