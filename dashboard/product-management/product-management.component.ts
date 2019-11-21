import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  search;
  searchString:String;
  productTableHead = [
    {
      title:"Date",id:"added_date"
    },
    {
      title:"Product Desc",id:"product_description"
    },
    {
      title:"Product Name",id:"product_name"
    },
    {
      title:"Product Type;",id:"product_type"
    }
  ]

productTableData = [];


  constructor(private appService:AppService) { 

  }

  ngOnInit() {
    this.appService.get(this.appService.productList).subscribe((res:Config)=>{
      
        this.productTableData = res.Items;
      
      
      console.log(this.productTableData);
    })
  }
  valuechange(e){
    this.searchString = e.target.value;
    setTimeout(()=>{
      this.appService.get(this.appService.productList+this.searchString).subscribe((res:Config)=>{
      
        this.productTableData = res.Items;
      
      
      console.log(this.productTableData);
    })
    },500)
    
  }
  

}
