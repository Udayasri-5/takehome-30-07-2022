import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  productCategories!: Category[];
  constructor(private service : ProductServicesService,private route: Router,private activeRoute : ActivatedRoute) { }
  formModel : Category = new Category(0,"");
  ngOnInit(): void {
    this.listOfCategories()
    this.activeRoute.paramMap.subscribe(() =>{
      this.listOfCategories()});
  }

  listOfCategories(){
    this.service.getAllCategories().subscribe(data=>{
      console.log(data); 
      this.productCategories = data;
    })
  }

  onSubmit(form:NgForm){
    this.productCategories.push(form.value);
    }

}
