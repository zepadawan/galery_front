import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { AddTableauComponent } from './components/shop/add-tableau/add-tableau.component';
import { EditTableauComponent } from './components/shop/edit-tableau/edit-tableau.component';
import { SingleTableauComponent } from './components/shop/single-tableau/single-tableau.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FooterComponent } from './components/gui/footer/footer.component';
import { HeaderComponent } from './components/gui/header/header.component';
import { HeaderPageComponent } from './components/gui/header-page/header-page.component';
import { NotFoundComponent } from './components/gui/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableauxComponent } from './components/shop/tableaux/tableaux.component';
import { HomeComponent } from './components/gui/home/home.component';
import { GuiComponent } from './components/gui/gui.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    AddTableauComponent,
    EditTableauComponent,
    SingleTableauComponent,
    CartComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    HeaderPageComponent,
    NotFoundComponent,
    TableauxComponent,
    HomeComponent,
    GuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
