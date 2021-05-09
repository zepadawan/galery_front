import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { Texte } from 'src/app/models/texte';
import { User } from 'src/app/models/user.model';
import { CartService } from 'src/app/services/cart.service';
import { TextesService } from 'src/app/services/textes.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'node-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  carts: Cart[] = [];
  cartData: any;
  //  categories: Category[];
  categories: any;
  categorySubcription: Subscription;
  cartSubsription: Subscription;
  userSubsription: Subscription;

  @Input() isAuth = false;
  @Input() user: User;

  @Input() isAdmin = false;


  constructor(private cartService: CartService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.carts = this.cartService.carts;
    this.cartData = this.cartService.cartData;
    // this.categorySubcription = this.categoryService.categorySubject.subscribe(
    //   (data: Category[]) => {
    //     this.categories = data;
    //   });
    //this.categoryService.emitCategories();
    this.isAuth = this.usersService.isAuth;
    this.user = this.usersService.user;
    console.log(this.user);
    if (this.user) {
      this.isAdmin = ((this.user?.role == 'admin') || (this.user?.role == 'superadmin')) ? true : false;
    }

  }

  ngOnDestroy(): void {
    //this.categorySubcription.unsubscribe();
  }

  getTexte(id: number): string {
    return "";
  }
  onLogOut() {
    this.usersService.logOut();
    this.isAuth = this.usersService.isAuth;
  }

}
