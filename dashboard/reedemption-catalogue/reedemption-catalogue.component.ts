import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reedemption-catalogue',
  templateUrl: './reedemption-catalogue.component.html',
  styleUrls: ['./reedemption-catalogue.component.scss']
})
export class ReedemptionCatalogueComponent implements OnInit {
  redemptionHead = [
    {title:"Product Category"},
  	{title:"Product Name"},
  	{title:"Product ID"},
  	{title:"Points"}
   
  ];
  redemptionData = [];
  constructor() { }

  ngOnInit() {
  }

}
