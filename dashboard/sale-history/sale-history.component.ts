import { Component, OnInit } from '@angular/core';
import { RetailerDataService } from 'src/app/service/retailer.service';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';


@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.scss']
})
export class SaleHistoryComponent implements OnInit {
  
  saleHeader = [];
  saleData=[];
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
      this.http.get("https://api.myjson.com/bins/tewxy").subscribe((res:Config)=>{
        console.log(res);
        this.saleHeader = res.saleHeader;
        this.saleData = res.saleData;
        console.log(this.saleHeader,this.saleData)
      })
  }


}
