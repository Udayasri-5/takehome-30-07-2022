import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  productDetails(){
    this.route.navigateByUrl("/products")
  }

  categoryDetails(){
    this.route.navigateByUrl("/productCategories")
  }

}
