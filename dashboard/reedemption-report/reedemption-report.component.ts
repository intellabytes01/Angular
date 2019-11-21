import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reedemption-report',
  templateUrl: './reedemption-report.component.html',
  styleUrls: ['./reedemption-report.component.scss']
})
export class ReedemptionReportComponent implements OnInit {
  reedemptionHead = [
    
    {title:"Order ID"},	
    {title:"Retailer ID"},	
    {title:"Redeem Product Name"},	
    {title:"Redeem Points"},	
    {title:"Redeem Date With time"}
  
  ];
  reedemptionData=[];
  constructor() { }

  ngOnInit() {
  }

}
