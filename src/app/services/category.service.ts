import { Result } from './../models/result';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs';
import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];
  categorySubject = new Subject<Category[]>();

  constructor(private http: HttpClient) {
    this.getCategoriesFromServer();
  }

  emitCategories() {
    this.categorySubject.next(this.categories);
  }

  getCategoriesFromServer() {
    const url = `${environment.api}` + 'categories';
    console.log(url);

    return this.http.get<any>(url).subscribe(
      (dataCategories: Result) => {
        console.log(dataCategories);
        if (dataCategories.status == 200) {
          this.categories = dataCategories.args;
        }
        this.emitCategories();
      },
      (err) => {
        console.log(err);
      }
    )
  };

  getCategoryNameById(id: number): string {
    const libelle = this.categories[id - 1].libelle;
    return libelle;
  }


}




