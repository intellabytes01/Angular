import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-manage-user',
  templateUrl: './retailer-manage-user.component.html',
  styleUrls: ['./retailer-manage-user.component.scss']
})
export class RetailerManageUserComponent implements OnInit {
 
  userHeader = [
      {name:"Srno"},
      {name:"name"},
      {name:"Mobile"},
      {name:"Actions"}

  ];


  plumbUserData = [
    {name:"Prakhar Mathur",mobile:9716273125,type:"plumber"},
    {name:"Anuj Goel",mobile:9876543210,type:"plumber"},
    {name:"Siddartha Kolhi",mobile:9876543211,type:"plumber"},
    {name:"Manvi Seghal",mobile:9090807069,type:"plumber"},
    {name:"Donald trump",mobile:9000000000,type:"plumber"}
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  moveToProfile(userno,user){
    console.log(userno,user);
    switch(user){
      case "distributer":
        this.router.navigate(['dashboard/userprofile'],{queryParams:{dist:userno}});
      break;
      case "retailer":
      this.router.navigate(['dashboard/userprofile'],{queryParams:{ret:userno}});
      break;
      case "plumber":
      this.router.navigate(['dashboard/userprofile'],{queryParams:{plumb:userno}});
      break;
    }
    

  }

}
