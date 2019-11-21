import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  nameofuser:String;
  movabaleIcon:String = "fa-arrow-left";
  baseRoute;
  isToggled = false;


  constructor(private appService:AppService) {
    
  }


  ngOnInit() {
    this.nameofuser = this.appService.userName;
    console.log(this.nameofuser)
    switch(+this.appService.getRole){
      case 3:
      this.baseRoute = "./dashboard/retailer";
      break;
    }
  }


 
  logoutCall(){
    this.appService.logout();
  }
  


}
