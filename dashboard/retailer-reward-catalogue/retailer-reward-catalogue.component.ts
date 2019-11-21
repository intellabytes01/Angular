import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-retailer-reward-catalogue',
  templateUrl: './retailer-reward-catalogue.component.html',
  styleUrls: ['./retailer-reward-catalogue.component.scss']
})
export class RetailerRewardCatalogueComponent implements OnInit {
  rewardCatM=[];
  rewardCatF=[];
  pageno = 1;
  range ;
  constructor( private appService:AppService) { }
  
  ngOnInit() {
    this.appService.get(this.appService.getRetailerCatalogue,{page_no:this.pageno,page_size:10,type:"M",range:200000}).subscribe((res:Config)=>{
      this.rewardCatM = res.Items;
      console.log(this.rewardCatM)
    })
    this.appService.get(this.appService.getRetailerCatalogue,{page_no:this.pageno,page_size:10,type:"F",range:200000}).subscribe((res:Config)=>{
      this.rewardCatF = res.Items;
      console.log(this.rewardCatM)
    })
  }

prev(data){
  if(this.pageno>1){
    this.pageno--;
    this.appService.get(this.appService.getRetailerCatalogue,{page_no:this.pageno,page_size:10,type:data,range:2000}).subscribe((res:Config)=>{
      this.rewardCatM = res.Items;
      console.log(this.rewardCatM)
    })
  }
}
next(data){
  if(this.pageno >= 1){
    this.pageno++;
    this.appService.get(this.appService.getRetailerCatalogue,{page_no:this.pageno,page_size:10,type:data,range:2000}).subscribe((res:Config)=>{
      this.rewardCatM = res.Items;
      console.log(this.rewardCatM)
    })
  }
}

}
