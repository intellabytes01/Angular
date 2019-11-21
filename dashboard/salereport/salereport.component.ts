import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salereport',
  templateUrl: './salereport.component.html',
  styleUrls: ['./salereport.component.scss']
})
export class SalereportComponent implements OnInit {
  reportTitle:String = "Sale Submit";

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

  showDistributerSellReport(){
    
  }
  showRetailerSellReport(){

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
      this.router.navigate(['dashboard/dsalesubmit'],{queryParams:{prvd:event.target.text}});
      break;
      case "retailer":
      this.router.navigate(['dashboard/rsalesubmit'],{queryParams:{prvr:event.target.text}});
     
      break;
    }

  }




}
