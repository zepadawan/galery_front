import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/gui/home/home.component';
import { NotFoundComponent } from './components/gui/not-found/not-found.component';
import { AddTableauComponent } from './components/shop/add-tableau/add-tableau.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { EditTableauComponent } from './components/shop/edit-tableau/edit-tableau.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleTableauComponent } from './components/shop/single-tableau/single-tableau.component';
import { TableauxComponent } from './components/shop/tableaux/tableaux.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'tableaux', component: TableauxComponent },
  { path: 'add-tableau', component: AddTableauComponent },
  { path: 'sigle-tableau/:id', component: SingleTableauComponent },
  { path: 'edit-tableau', component: EditTableauComponent },
  { path: 'cart', component: CartComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', component: ShopComponent },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
