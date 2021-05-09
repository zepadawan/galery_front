import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tableau } from 'src/app/models/tableau';
import { CartService } from 'src/app/services/cart.service';
import { TableauxService } from 'src/app/services/tableaux.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'node-tableaux',
  templateUrl: './tableaux.component.html',
  styleUrls: ['./tableaux.component.css']
})
export class TableauxComponent implements OnInit, OnDestroy {

  @Input() tableaux = [];
  @Input() ispaginate: boolean = true;
  // @Input() isByCategories: boolean = false;

  prefixUrlImage = environment.api_image;
  tableauSubscription: Subscription;
  cartData;
  currentPage = 0;
  pages = [0, 1, 2, 3, 4, 5, 6, 7];

  constructor(private tableauService: TableauxService,
    private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.tableauSubscription = this.tableauService.tableauSubject.subscribe(
      (data: Tableau[]) => {
        this.tableaux = this.tableauService.tableaux;
      }
    );
    this.tableauService.emitTableaux();
  }
  ngOnDestroy(): void {
    this.tableauSubscription.unsubscribe();
  }

  addToCart(tableau: Tableau): void {
    this.cartService.addProductToCard(tableau);
  }

  deleteFromCart(tableau: Tableau): void {
    this.cartService.deleteFromCart(tableau);
  }

  changePage(numberPage: number): void {
    //   const prod = this.productService.getProductbyPage(numberPage);
    //   if (prod) {
    //     this.products = prod;
    //     this.currentPage = numberPage;
    //   };
  }

  nextPage(): void {
    // const newCurrentPage = this.currentPage + 1;
    // const prod = this.productService.getProductbyPage(newCurrentPage);
    // if (prod) {
    //   this.products = prod;
    //   this.currentPage = newCurrentPage;
    // }
  };

  prevPage(): void {
    //   const newCurrentPage = this.currentPage - 1;
    //   const prod = this.productService.getProductbyPage(newCurrentPage);
    //   if (prod) {
    //     this.products = prod;
    //     this.currentPage = newCurrentPage;
    //   }
  }
}
