import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Category } from '../common/category';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  producturl = "http://localhost:8080/api/product"
  categoryurl = "http://localhost:8080/api/category"


  constructor(private httpclient : HttpClient) { }
  getAllProducts() : Observable<Product[]>{
    console.log(this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products)))
    return this.httpclient.get<getProductResponse>(this.producturl).pipe(map(response => response._embedded.products))
  }

  getAllCategories() : Observable<Category[]>{
    console.log(this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.productCategories)))
    return this.httpclient.get<getCategoryResponse>(this.categoryurl).pipe(map(response => response._embedded.productCategories))
  }

}
interface getProductResponse {
  _embedded : {
    products : Product[]
  }
}

interface getCategoryResponse {
  _embedded : {
    productCategories : Category[]
  }
}



