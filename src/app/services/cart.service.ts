import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Tableau } from '../models/tableau';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts: Cart[];
  cartData;

  constructor() {
    this.initCarts();
  }

  initCarts(): void {
    if (localStorage.length != 0) {
      const lstcarts = JSON.parse(localStorage.getItem('carts'));
      const lstcartData = JSON.parse(localStorage.getItem('cartData'));
      this.carts = lstcarts ? (lstcarts) : [];
      this.cartData = lstcartData ? lstcartData : { len: 0, cost: 0 };
    } else {
      this.carts = [];
      this.cartData = { len: 0, cost: 0 };
    }
  }

  addProductToCard(newTableau: Tableau): void {
    const checkedTableau = this.carts.find(element => element.tableau == newTableau)
    if (checkedTableau) {
      checkedTableau.number++;
    }
    else {
      const newTableauToAdd = {
        number: 1,
        tableau: newTableau
      };
      this.carts.push(newTableauToAdd);
    }
    // this.updateDataCart();
  }

  deleteFromCart(TableauToDelete: Tableau): void {
    const indexTableau = this.carts.findIndex(element => element.tableau == TableauToDelete);
    if (indexTableau !== -1) {
      if (this.carts[indexTableau].number > 1) {
        this.carts[indexTableau].number--
      } else {
        this.carts.splice(indexTableau, 1);
      };
      //this.updateDataCart();
    }
  }

  // updateDataCart() {
  //   let len = 0;
  //   let cost = 0;
  //   this.carts.forEach(element => {
  //     len += element.number;
  //     cost += element.product.price * element.number;
  //   });
  //   this.cartData.len = len;
  //   this.cartData.cost = cost;
  //   if (typeof (localStorage) !== 'undefined') {
  //     localStorage.setItem('carts', JSON.stringify(this.carts));
  //     localStorage.setItem('cartData', JSON.stringify(this.cartData));
  //   };
  // }

  // removeElementOfCart(id: number): void {
  //   this.carts.splice(id, 1);
  //   this.updateDataCart();
  // }


}
