import { AppComponent } from './../app.component';
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
  //  tableau: Tableau;
  constructor(private http: HttpClient) {
    this.getTableauxFromServer();
  }

  emitTableaux() {
    this.tableauSubject.next(this.tableaux);
  }

  getTableauxFromServer(): any {
    const url = `${environment.api + 'oeuvres/get'}`;
    return this.http.get<any>(url).subscribe(
      (data: Result) => {
        this.tableaux = data.args;
        this.emitTableaux();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getTableauById(id: number) {
    const url = `${environment.api + 'oeuvres/' + id}`;
    console.log(url);

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (data: Result) => {
          if (data.status == 200) {
            resolve(data);
          } else {
            reject(data.message);
          }
        },
        (err) => {
          console.log(err);
          reject(err)
        }
      )
    })
  }

  createNewTableau(tableau: Tableau) {
    const url = `${environment.api + 'oeuvres/register'}`;
    console.log(url);

    const body = {
      tableau: tableau
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, body).subscribe(
        (data: Result) => {
          console.log(data);
          if (data.status == 201) {
            resolve(data.args);
          } else {
            console.log(data.message);
            reject(data.message);
          }
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      )
    })
  }

  updateTableau(id: number, tableau: Tableau, image: File | string) {
    const url = `${environment.api + 'oeuvres/' + id}`;

    return new Promise((resolve, reject) => {
      let tableauData: FormData = new FormData();
      if (typeof (image) === 'string') {
        tableau.nom_image = image
      } else {
        tableauData.append('image', image);
      }

      tableauData.append('tableau', JSON.stringify(tableau))
      this.http.put(url, tableauData).subscribe(
        (data: Result) => {
        },
        (err) => {
          reject(err);
          console.log(err);
        }
      )
    })
  }

  // Afficahege par pages => Pagination
  getProductbyPage(numberPage: number): Tableau[] {

    // this.nomberOfPage = Math.trunc(this.products.length / this.numberOfProductByPage);
    // if (numberPage > 0 || numberPage <= (this.nomberOfPage)) {
    //   const prodResult = this.products.slice(numberPage * this.numberOfProductByPage, (numberPage + 1) * this.numberOfProductByPage);
    //   return prodResult;
    // }
    return null;

  }

  saveImageOnServer(file: File) {
    const urlImage = `${environment.api_image}`;
    const url = `${environment.api + 'upload'}`;
    console.log('url = ' + url);
    console.log(file);
    let formdata: any = new FormData();
    formdata.append("sampleFile", file)

    this.http.post(url, formdata).subscribe(
      (data: Result) => {
        console.log(data);
      },
      (err) => {
        console.log('erreur ----');
        console.log(err);
      });
  }



  // return new Promise((resolve, reject) => {
  //   this.http.post(url, file).subscribe(
  //     (data: Result) => {
  //       console.log('file upload = OK');
  //     },
  //     (err) => {
  //       console.log('erreur ----');
  //       console.log(err);
  //     }
  //   )
  // });
}

