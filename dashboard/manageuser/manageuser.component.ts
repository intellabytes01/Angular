import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.scss']
})
export class ManageuserComponent implements OnInit {
  isActive:String= "text-success";
  userHeader = [
      {name:"Srno"},
      {name:"name"},
      {name:"Mobile"},
      {name:"Actions"}

  ];

  distUserData = [
    {name:"Prakhar Mathur",mobile:9716273125,type:"distributer"},
    {name:"Anuj Goel",mobile:9876543210,type:"distributer"},
    {name:"Siddartha Kolhi",mobile:9876543211,type:"distributer"},
    {name:"Manvi Seghal",mobile:9090807069,type:"distributer"},
    {name:"Donald trump",mobile:9000000000,type:"distributer"}
 

  ];
  retlUserData = [
    {name:"Prakhar Mathur",mobile:9716273125,type:"retailer"},
    {name:"Anuj Goel",mobile:9876543210,type:"retailer"},
    {name:"Siddartha Kolhi",mobile:9876543211,type:"retailer"},
    {name:"Manvi Seghal",mobile:9090807069,type:"retailer"},
    {name:"Donald trump",mobile:9000000000,type:"retailer"}
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

  /**
   * this function is used to show user profile via userno
   * and its type
   * @param userno used for user mobile no 
   * @param user used to get user type
   */
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
