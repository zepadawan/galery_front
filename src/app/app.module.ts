import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTableauComponent } from './admin/tableaux/edit-tableau/edit-tableau.component';
import { HeaderAdminComponent } from './components/gui/header-admin/header-admin.component';
import { AdminTableauxComponent } from './admin/tableaux/creation-tableau/creation-tableau.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { SingleTableauComponent } from './components/shop/single-tableau/single-tableau.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { FooterComponent } from './components/gui/footer/footer.component';
import { HeaderComponent } from './components/gui/header/header.component';
import { NotFoundComponent } from './components/gui/not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableauxComponent } from './components/shop/tableaux/tableaux.component';
import { HomeComponent } from './components/gui/home/home.component';
import { GuiComponent } from './components/gui/gui.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ModalAddToCartComponent } from './components/shop/modal-add-to-cart/modal-add-to-cart.component';
import { ModalQuickViewComponent } from './components/shop/modal-quick-view/modal-quick-view.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoriesComponent } from './admin/categories/creation-categorie/creation-categorie.component';
import { EditCategorieComponent } from './admin/categories/edit-categorie/edit-categorie.component';
import { AddTexteComponent } from './components/textes/add-texte/add-texte.component';
import { EditTexteComponent } from './components/textes/edit-texte/edit-texte.component';
import { ShowTexteComponent } from './components/textes/show-texte/show-texte.component';

// tinymce
import { EditorModule } from '@tinymce/tinymce-angular';
import { MyEditorComponent } from './admin/myeditor/myeditor.component';
import { ShowTableauComponent } from './admin/tableaux/show-tableau/show-tableau.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    SingleTableauComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    HeaderAdminComponent,
    NotFoundComponent,
    TableauxComponent,
    CategoryComponent,
    HomeComponent,
    GuiComponent,
    LoginComponent,
    RegisterComponent,
    ModalAddToCartComponent,
    ModalQuickViewComponent,
    AdminComponent,
    AdminTableauxComponent,
    EditTableauComponent,
    AdminCategoriesComponent,
    EditCategorieComponent,
    AddTexteComponent,
    EditTexteComponent,
    ShowTexteComponent,
    MyEditorComponent,
    ShowTableauComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
