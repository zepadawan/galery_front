import { ShowTexteComponent } from './components/textes/show-texte/show-texte.component';
import { AuthGuard } from './services/auth.guard';
import { EditTableauComponent } from './admin/tableaux/edit-tableau/edit-tableau.component';
import { AdminCategoriesComponent } from './admin/categories/creation-categorie/creation-categorie.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { AdminTableauxComponent } from './admin/tableaux/creation-tableau/creation-tableau.component';
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
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent, },
  // { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  // { path: 'tableaux', component: TableauxComponent, canActivate: [AuthGuard] },
  // { path: 'category/:id', component: CategoryComponent, canActivate: [AuthGuard] },
  // { path: 'single-tableau/:id', component: SingleTableauComponent, canActivate: [AuthGuard] },
  // // Administration
  // { path: 'administration', component: AdminComponent, canActivate: [AuthGuard] },
  // { path: 'admin_tableaux', component: AdminTableauxComponent, canActivate: [AuthGuard] },
  // { path: 'edit-tableaux/:id', component: EditTableauComponent, canActivate: [AuthGuard] },
  // { path: 'admin_categories', component: AdminCategoriesComponent, canActivate: [AuthGuard] },
  // { path: 'admin_textes', component: ShowTexteComponent, canActivate: [AuthGuard] },

  { path: 'home', component: HomeComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent, },
  { path: 'shop', component: ShopComponent, },
  { path: 'tableaux', component: TableauxComponent, },
  { path: 'category/:id', component: CategoryComponent, },
  { path: 'single-tableau/:id', component: SingleTableauComponent, },

  // Administration
  { path: 'administration', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin_tableaux', component: AdminTableauxComponent, canActivate: [AuthGuard] },
  { path: 'edit-tableaux/:id', component: EditTableauComponent, canActivate: [AuthGuard] },
  { path: 'admin_categories', component: AdminCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'admin_textes', component: ShowTexteComponent, canActivate: [AuthGuard] },




  // Paiement
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },


  { path: '', component: ShopComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
