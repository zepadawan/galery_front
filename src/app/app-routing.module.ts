import { AdminCategoriesComponent } from './admin/categories/admin-categories/admin-categories.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { AdminTableauxComponent } from './admin/tableaux/admin-tableaux/admin-tableaux.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/gui/home/home.component';
import { NotFoundComponent } from './components/gui/not-found/not-found.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleTableauComponent } from './components/shop/single-tableau/single-tableau.component';
import { TableauxComponent } from './components/shop/tableaux/tableaux.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'tableaux', component: TableauxComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'single-tableau/:id', component: SingleTableauComponent },
  { path: 'administration', component: AdminComponent },
  { path: 'admin_tableaux', component: AdminTableauxComponent },
  { path: 'admin_categories', component: AdminCategoriesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'admin', component: AdminComponent },

  { path: '', component: ShopComponent },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
