import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'node-admin-categories',
  templateUrl: './creation-categorie.component.html',
  styleUrls: ['./creation-categorie.component.css']
})
export class AdminCategoriesComponent implements OnInit, OnDestroy {

  currentpage = "Gestion des catégories";
  parentPage = "Admin";
  categories: Category[] = [];
  catLength;
  adminCategoriesSubscription: Subscription;
  constructor(private categoryServices: CategoryService) { }

  ngOnInit(): void {
    this.adminCategoriesSubscription = this.categoryServices.categorySubject.subscribe(
      (data) => {
        this.categories = this.categoryServices.categories;
      }
    );
    this.categoryServices.emitCategories();
  }

  ngOnDestroy(): void {
    this.adminCategoriesSubscription.unsubscribe();
  }

  getLength(): number {
    return (this.categories).length;
  }

}
