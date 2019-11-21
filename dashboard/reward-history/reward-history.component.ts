import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-reward-history',
  templateUrl: './reward-history.component.html',
  styleUrls: ['./reward-history.component.scss']
})
export class RewardHistoryComponent implements OnInit {
  
  pointHead=[
    {title:"Srno"},
    {title:"Product"},
    {title:"Earned"},
    {title:"Balance"},
    {title:"Date"},
    {title:"Time"},

  ];
  pointHistroyData=[
    {productTitle:"Sintex 700",earned:10,balance:20,date:"",time:""},
    {productTitle:"Sintex 500",earned:10,balance:20,date:"",time:""},
    {productTitle:"Sintex 1000",earned:10,balance:50,date:"",time:""},
    {productTitle:"Sintex 2000",earned:10,balance:100,date:"",time:""},
    {productTitle:"Sintex 2000",earned:10,balance:500,date:"",time:""}
  ];
  pointType=[
    {title:"Basic",points:5000},
    {title:"Multiplier",points:3000},
    {title:"Campaign",points:8000},
    {title:"Group Points",points:800},
    {title:"Reedemed",points:7000},
    {title:"Total Points",points:16000},

  ]
  
  constructor() { }

  ngOnInit() {
    
  }

}
