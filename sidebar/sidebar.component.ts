import { Component, OnInit } from "@angular/core";
import { AppService } from "../shared/app.service";
import { TranslateService } from "@ngx-translate/core";

const RETAILER_VALUE:number = 3;
const DISTRIBUTOR_VALUE:number = 2;
const ADMIN_VALUE:number = 1;
const PLUMBER_VALUE:number = 4;

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  role_id = localStorage.getItem('d-role');
  menuItems = [];
  constructor(private appService: AppService, private translate:TranslateService) {
    
  }

  ngOnInit() {
    this.appService.sideBarToggleSubject.subscribe(isToggled => {
      //toggle to left or right based on isToggled
    });
    this.changeSidebar();
 
  }
  changeSidebar(){
    console.log(+this.role_id)
    switch(+this.role_id){
        case ADMIN_VALUE:

            this.menuItems.push(
              {
              title: "sidemenu.dashboard",
              url: "./"
            },
            {
              title: "sidemenu.usermanagement",
              url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            {
              title: "sidemenu.prodmanagement",
               url: "./product-management",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            {
              title: "sidemenu.rewrdmanagement",
              // url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            {
              title: "sidemenu.rprtmanagement",
              // url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            {
              title: "sidemenu.promotions",
              // url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            {
              title: "sidemenu.sms",
              // url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            {
              title: "sidemenu.kycmanagemet",
              // url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            },
            // {
            //   title: "sidemenu.settings",
              // url: "./manage-users",
              // child: [{ title: "User Management", url: "./manage-users" }]
            // }
            );
        break;
        
        case DISTRIBUTOR_VALUE:

        break;
        case RETAILER_VALUE:
        
        this.menuItems.push(
          {
          title: "Dashboard",
          url: "./",
          icon:"fas fa-tachometer-alt"
          },
          {
            title: "Manage User",
            url: "./retailer/manage-user",
            icon:"fa fa-pencil-square-o"
            // child: [{ title: "User Management", url: "./manage-users" }]
            },
          {
          title: "Reward Catalogue",
          url: "./retailer/reward-catalogue",
          icon:"fa fa-gift"
          // child: [{ title: "User Management", url: "./manage-users" }]
          },
          {
          title: "My Profile",
          url: "./retailer/profile",
          icon:"fa fa-user"
          // url: "./manage-users",
          // child: [{ title: "User Management", url: "./manage-users" }]
          },
          {
          title: "Redemption Histroy",
          url: "./retailer/reedem-histroy",
          icon:"fas fa-history"
          // child: [{ title: "User Management", url: "./manage-users" }]
          },
          {
          title: "Reward Summary",
          url: "./retailer/rewards-summary",
          icon:"fa fa-file-text"
          // child: [{ title: "User Management", url: "./manage-users" }]
          },
        // {
        //   title: "Notifications",
        //   // url: "./manage-users",
        //   // child: [{ title: "User Management", url: "./manage-users" }]
        // },
        {
          title: "Schemes",
          url: "./retailer/schemes",
          icon:"fa fa-tags"
          // child: [{ title: "User Management", url: "./manage-users" }]
        },
        {
          title: "Promotions",
          url: "./retailer/promotions",
          icon:"fa fa-bullhorn"
          // child: [{ title: "User Management", url: "./manage-users" }]
        },
        {
          title: "Order Intent",
          url: "./retailer/order-intent",
          icon:"fa fa-shopping-cart"
          // child: [{ title: "User Management", url: "./manage-users" }]
        },
        {
          title: "Feedback",
          url: "./retailer/feedback",
          icon:"far fa-comments"
          // child: [{ title: "User Management", url: "./manage-users" }]

        },
        {
          title: "Support",
          url: "./retailer/support",
          icon:"fa fa-question-circle"
          // child: [{ title: "User Management", url: "./manage-users" }]
        },
        // {
        //   title: "Settings",
        //   icon:"fa fa-cog"
          // url: "./manage-users",
          // child: [{ title: "User Management", url: "./manage-users" }]
        // }
        
        
        
        );
        break;
        case PLUMBER_VALUE:

        break;
    }
  }
}
