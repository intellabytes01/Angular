import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvereport',
  templateUrl: './approvereport.component.html',
  styleUrls: ['./approvereport.component.scss']
})
export class ApprovereportComponent implements OnInit {
  approvalList=[
    {no:9716273125,name:"Prakhar mathur"},
    {no:9716273124,name:"Siddhartha Kolhi"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
