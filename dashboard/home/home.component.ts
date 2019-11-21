import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const RETAILER_VALUE:number = 3;
const DISTRIBUTOR_VALUE:number = 2;
const ADMIN_VALUE:number = 1;
const PLUMBER_VALUE:number = 4;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  role_id = localStorage.getItem('d-role');
  isSalePurchaseShown:boolean = true;
  selectedUserType: any = 1;
  userType: number;
  selectedZone:any = 0;
  selectedBranch:any = 0;

  options: any[] = [{ value: PLUMBER_VALUE, title: "Plumber" }, 
                    { value: RETAILER_VALUE, title: "Retailer" },
                    { value: DISTRIBUTOR_VALUE, title: "Distributor" }]

  isZoneSelectionDisabled = false;
  hideZoneDropDown = true;
  hideBranchDropDown=true;
  zones: any[] = [
    {title : "Zone 1"}
  ];

  branches: any[] = [
    {title : "Branch 1"}
  ];


 




  // userHeader =[]




  userHeader = [
    
  { name:"Billing Date"},
  { name:"Sale Type	"},
  { name:"Supply Type	"},
  { name:"Division	"},
  { name:"GST	"},
  { name:"Tax Code	"},
  { name:"Invoice Number"},
  { name:"Invoice type"},
  { name:"Invoice Desc"},
  { name:"Sales Office	"},
  { name:"Sales Group"},
  { name:"Created By"},
  { name:"Created Date	"},
  { name:"Customer no	"},
  { name:"Customer Name	"},
  { name:"City	"},
  { name:"State	"},
  { name:"Country	"},
  { name:"Product Grp	"},
  { name:"Product Grp2	"},
  { name:"Item no	"},
  { name:"Material	"},
  { name:"Description of goods / services	"},
  { name:"Quantity	"},
  { name:"UOM	RATE	"},
  { name:"PACK & FWD	"},
  { name:"AMOUNT	"},
  { name:"TC CESS	"},
  { name:"VAT 4%	"},
  { name:"VAT 1%	"},
  { name:"CST	"},
  { name:"TCS	"},
  { name:"CHARITY	"},
  { name:"Cancel Doc	"},
  { name:"STATIONARY	"},
  { name:"INSURANCE	"},
  { name:"FREIGHT	"},
  { name:"TOTAL	"},
  { name:"IGST	"},
  { name:"IGST %	"},
  { name:"CGST	"},
  { name:"CGST %	"},
  { name:"SGST	"},
  { name:"SGST %	"},
  { name:"Cash Discount (%)	"},
  { name:"Cash Discount Amount	"},
  { name:"Zonal Discount %	"},
  { name:"Zonal Discount Amount	"},
  { name:"Special Discount %	"},
  { name:"Special Discount Amount"},
  { name:"Plant	"},
  { name:"Net Value	"},
  { name:"Total Tax	"},
  { name:"GST Number	"},
  { name:"Consignee No	"},
  { name:"Consignee Name	"},
  { name:"Consignee GST Number	"},
  { name:"Consignee City	"},
  { name:"Consignee State	"},
  { name:"HSN Code	"},
  { name:"Shipping Bill No	"},
  { name:"Shipping Bill date	"},
  { name:"Original Cancelled Invoice	"},
  { name:"Reference	"},
  { name:"Original Invoice	"},
  { name:"Port	"},
  { name:"Order Reason Code	"},
  { name:"Order Reason	"},
  { name:"Price List	"},
  { name:"Net Weight	"},
  { name:"Gross weigt	Volume in Liter	"},
  { name:"Qty * Volume in Liter	"},
  { name:"Zone	"},
  { name:"Master Zone	"},
  { name:"Customer Group	"},
  { name:"Customer Group Description	"},
  { name:"Distrubutor Number	"},
  { name:"Distrubutor Name	"},
  { name:"Master Sales Office	"},
  { name:"Mater Sales Office Description"},
  { name:"Master Product Group"}

];



  dashData = [
    { name: "Total Sale", reward: 100000, icon: "fa-shopping-cart" },
    { name: "Total Purchase", reward: 20000, icon: "fa-gavel" },
    { name: "Rewards", reward: 10000, icon: "fa-money" ,url:"rewards-summary" },
  ]


  constructor(private router:Router) {
    
    
    //get zones from api
  }

  ngOnInit() {
     //get it from local storage
     
    this.prepareDashboard(+this.role_id);
    
   


    
  }


  changeUserType(data) {
    console.log(this.selectedUserType);
    //get data as per selected type
  }

  prepareDashboard(userType:number){
    
    this.options = this.options.filter((option)=>{
      return option.value > this.userType;
    })
   
    switch(userType){
      
      
      case ADMIN_VALUE:

      break;

      case DISTRIBUTOR_VALUE:

      break;

      case RETAILER_VALUE:
      
      this.router.navigate(['dashboard/retailer']);
      break;

      case PLUMBER_VALUE:
      

      break;


    }
    
    if(this.userType >= DISTRIBUTOR_VALUE){
      this.isZoneSelectionDisabled = true;
      
    }
    if(this.userType >= RETAILER_VALUE){
      
      this.hideBranchDropDown = false
      this.hideZoneDropDown = false;
      
    }
  }
}
