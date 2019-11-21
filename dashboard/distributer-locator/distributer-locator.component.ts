import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributer-locator',
  templateUrl: './distributer-locator.component.html',
  styleUrls: ['./distributer-locator.component.scss']
})
export class DistributerLocatorComponent implements OnInit {
  distributerHead = [
    {title:"Branch Name"},
    {title:"Zone"},
    {title:"Firm Name"},
    {title:"Contact Name"},
    {title:"Mobile No"},
    {title:"Email ID"}
  ]
  distributerDate = [];
  constructor() { }
  
  ngOnInit() {

//get value from app service api 


  }

}
