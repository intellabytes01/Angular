import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-distributersalesubmit",
  templateUrl: "./distributersalesubmit.component.html",
  styleUrls: ["./distributersalesubmit.component.scss"]
})
export class DistributersalesubmitComponent implements OnInit {
  
  prevParams1;
  message: string;
  
  distributer = [
    {
      name: "Prakhar Mathur",
      no: "9716273125"
    },
    {
      name: "Vijay Mathur",
      no: "9997754213"
    },
    {
      name: "Rom Singh",
      no: "8974561230"
    },
    {
      name: "Sid Kholi",
      no: "9871234560"
    }
  ];
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.prevParams1 = this.activatedRoute.snapshot.queryParams;
  }

  ngOnInit() {}
  /**
   * @param method viewPerson()
   * @param event this is current element value
   * @param person person is Distributer | Retailer
   * @param whatreport whatreport is used to check it is a sell report | purchase report
   *
   */
  viewPerson(event, person, whatreport) {
    console.log(event.target.text, person, whatreport);

    this.router.navigate(["dashboard/salesubmit"], {
      queryParams: { prvd: this.prevParams1.prvd, ltst: event.target.text }
    });
  }
}
