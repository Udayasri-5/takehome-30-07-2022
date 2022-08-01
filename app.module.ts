import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { Router,RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const route : Routes = [
  {path:'',component:MainpageComponent} , 
  {path : 'products',component : ProductListComponent } , 
  {path : 'productCategories' , component : CategoryListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
