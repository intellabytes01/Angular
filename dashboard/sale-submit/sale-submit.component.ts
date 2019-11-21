import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sale-submit',
  templateUrl: './sale-submit.component.html',
  styleUrls: ['./sale-submit.component.scss']
})
export class SaleSubmitComponent implements OnInit {
  
  
  param;
  message:string;
  behalf:String;
  behalfee:String;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.param = this.activatedRoute.snapshot.queryParams;
    console.log(this.param);
   }

  ngOnInit() {
    
      if(this.param.prvd && this.param.prvd!=this.param.ltst){
        this.behalf = "Distributer : "+this.param.prvd;
        this.behalfee = "Retailer : "+this.param.ltst;
      }
      else if(this.param.prvr && this.param.prvr!=this.param.ltst){
        //console.log("this is retailer");
        this.behalf = "Retailer : "+this.param.prvr;
        this.behalfee = "Plumber : "+this.param.ltst;
      } else {
        this.router.navigate(['dashboard/sale']);
      }
  }

}
