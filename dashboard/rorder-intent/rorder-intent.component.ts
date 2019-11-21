import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-rorder-intent',
  templateUrl: './rorder-intent.component.html',
  styleUrls: ['./rorder-intent.component.scss']
})
export class RorderIntentComponent implements OnInit {

  dataVal:any;
  prodList=[];
  prodID =[];
  isAlertShown:boolean = false;
  alertClass;
  alertMessage;
  searchProductInput:any;

  constructor( private appService:AppService) { }

  ngOnInit() {

    this.appService.get(this.appService.productList,{"page_no":1,"page_size":10,"search":this.dataVal}).subscribe((res:Config)=>{
      this.prodList=res.Items;
      console.log(this.prodList)
      this.prodList.forEach(element => {
        element.selected = false;
      });
    })

  }
  selectUser(item) {
    item.selected = !item.selected;
    if(item.selected){
      
      this.prodID.push(item.pk_product_id); 
      console.log("current arrya is " + this.prodID);
    }
    else{
      var removeItemIndex = this.prodID.indexOf(item.pk_product_id);

      if(removeItemIndex!=-1){
      
         this.prodID.splice(removeItemIndex, 1);
      }
      console.log("current arrya is " + this.prodID);
    }
  }

  searchUser() {
    
    console.log(this.dataVal)
    
    setTimeout(()=>{
      this.appService.get(this.appService.productList,{"page_no":1,"page_size":10,"search":this.dataVal}).subscribe((res:Config)=>{
        this.prodList=res.Items;
        console.log(this.prodList)
        this.prodList.forEach(element => {
          element.selected = false;
        });
      })
    },1000)
     
     
  
    
  }

 

}
