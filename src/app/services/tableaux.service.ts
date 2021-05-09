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
  tableauSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getTableauxFromServer();
  }

  emitTableaux() {
    this.tableauSubject.next(this.tableaux);
  }

  getTableauxFromServer(): any {
    const url = `${environment.api + '/oeuvres/get'}`;
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
  getTableauById(id: number): Tableau {
    const tableau = this.tableaux.find(element => element.id == id);
    if (tableau) {
      return tableau;
    }
    return null;
  }

  // Afficahege par pages => Pagination
  // getProductbyPage(numberPage: number): Product[]{

  //   this.nomberOfPage = Math.trunc(this.products.length/this.numberOfProductByPage);
  //   if(numberPage > 0 || numberPage <= (this.nomberOfPage)){
  //     const prodResult = this.products.slice(numberPage*this.numberOfProductByPage, (numberPage+1)*this.numberOfProductByPage);
  //     return prodResult;
  //   }
  //   return null;

  // }



}
