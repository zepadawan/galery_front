import { environment } from './../../environments/environment';
import { Subject } from 'rxjs';
import { category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: category[];
  categorySubject = new Subject<category[]>();

  constructor(private http: HttpClient) { }


  getCategoriesFromServer(): void {
    const url = `${environment.api}` + 'categories/';

  }


}
