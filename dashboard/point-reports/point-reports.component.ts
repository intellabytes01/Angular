import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-reports',
  templateUrl: './point-reports.component.html',
  styleUrls: ['./point-reports.component.scss']
})
export class PointReportsComponent implements OnInit {
  pointHead = [
    {title:"Month"}, 
    {title:"Name"},	
    {title:"Distributor"}, 
    {title:"Name"},	
    {title:"Product"}, 
    {title:"Name"},	
    {title:"Litters"},	
    {title:"Points"}
  ];
  pointData=[];

  constructor() { 
    
  }

  ngOnInit() {
  }

}
