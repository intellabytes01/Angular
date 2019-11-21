import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchasereport',
  templateUrl: './purchasereport.component.html',
  styleUrls: ['./purchasereport.component.scss']
})
export class PurchasereportComponent implements OnInit {

  reportTitle:String = "Purchase Submit";

  constructor(private router:Router) { }


  distributer= [
    {
      "name":"Prakhar Mathur",
      "no":"9716273125"
    },
    {
      "name":"Vijay Mathur",
      "no":"9997754213"
    },
    {
      "name":"Rom Singh",
      "no":"8974561230"
    },{
      "name":"Sid Kholi",
      "no":"9871234560"
    }

  ]


  ngOnInit() {
  }

 

  /**
   * @param method viewPerson()
   * @param event this is current element value
   * @param person person is Distributer | Retailer 
   * @param whatreport whatreport is used to check it is a sell report | purchase report
   * 
   */
  viewPerson(event,person,whatreport){
    console.log(event.target.text,person,whatreport);
    

    switch(person){
      case "distributer":
      this.router.navigate(['dashboard/rpurchasesubmit'],{queryParams:{prvd:event.target.text}});
      break;
      case "retailer":
      this.router.navigate(['dashboard/ppurchasesubmit'],{queryParams:{prvr:event.target.text}});
     
      break;
    }

  }


}



