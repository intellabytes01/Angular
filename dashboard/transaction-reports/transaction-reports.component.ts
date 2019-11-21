import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-reports',
  templateUrl: './transaction-reports.component.html',
  styleUrls: ['./transaction-reports.component.scss']
})
export class TransactionReportsComponent implements OnInit {

  constructor() { }
  trnsactionHead = [
    {title:"SalesInvCode"},
    {title:"SalesInvCode"},	
    {title:"InvDate"},	
    {title:"ZoneName"},	
    {title:"BranchName"},	
    {title:"DistiName"},	
    {title:"Godownname"},	
    {title:"Saleperson"},	
    {title:"Productname"},	
    {title:"HSNcode"},	
    {title:"Itemcatname"},	
    {title:"ItemSubcatname"},	
    {title:"UOM"},	
    {title:"Qty"},	
    {title:"RtnQty"},	
    {title:"NetQty"},	
    {title:"Litarage"}
  ];
  trnsactionData=[];

  ngOnInit() {
  }

}
