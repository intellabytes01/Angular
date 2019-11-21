import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { ManageretailerComponent } from './manageretailer/manageretailer.component';
import { ManageplumberComponent } from './manageplumber/manageplumber.component';
import { SalereportComponent } from 'src/app/dashboard/salereport/salereport.component';
import { PurchasereportComponent } from 'src/app/dashboard/purchasereport/purchasereport.component';
import { ApprovereportComponent } from 'src/app/dashboard/approvereport/approvereport.component';
import { UsersprofileComponent } from 'src/app/dashboard/usersprofile/usersprofile.component';
import { SaleSubmitComponent } from './sale-submit/sale-submit.component';
import { DistributersalesubmitComponent } from './distributersalesubmit/distributersalesubmit.component';
import { RetailersalesubmitComponent } from './retailersalesubmit/retailersalesubmit.component';
import { RetalerpurchasesubmitComponent } from './retalerpurchasesubmit/retalerpurchasesubmit.component';
import { PlumberpurchasesubmitComponent } from './plumberpurchasesubmit/plumberpurchasesubmit.component';
import { PurchaseSubmitComponent } from './purchase-submit/purchase-submit.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollPlumberComponent } from './enroll-plumber/enroll-plumber.component';

import { EnrollRetailerComponent } from './enroll-retailer/enroll-retailer.component';
import { RewardHistoryComponent } from './reward-history/reward-history.component';
import { RetailerdashComponent } from './retailerdash/retailerdash.component';
import { DistributerLocatorComponent } from './distributer-locator/distributer-locator.component';
import { TransactionReportsComponent } from './transaction-reports/transaction-reports.component';
import { PointReportsComponent } from './point-reports/point-reports.component';
import { FeedbackStatusComponent } from './feedback-status/feedback-status.component';
import { OrderIndentComponent } from './order-indent/order-indent.component';
import { PlumberReportingComponent } from './plumber-reporting/plumber-reporting.component';
import { ReedemptionCatalogueComponent } from './reedemption-catalogue/reedemption-catalogue.component';
import { ReedemptionReportComponent } from './reedemption-report/reedemption-report.component';
import { SchemePromotionsComponent } from './scheme-promotions/scheme-promotions.component';
import { RetailerManageUserComponent } from './retailer-manage-user/retailer-manage-user.component';
import { DistributerManageUserComponent } from './distributer-manage-user/distributer-manage-user.component';
import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';
import { SaleHistoryComponent } from './sale-history/sale-history.component';
import { SaleSummaryComponent } from './sale-summary/sale-summary.component';
import { RetailerReedemHistoryComponent } from './retailer-reedem-history/retailer-reedem-history.component';
import { RetailerSchemesComponent } from './retailer-schemes/retailer-schemes.component';
import { RetailerPromotionsComponent } from './retailer-promotions/retailer-promotions.component';
import { RorderIntentComponent } from './rorder-intent/rorder-intent.component';
import { RfeedbackComponent } from './rfeedback/rfeedback.component';
import { RsupportComponent } from './rsupport/rsupport.component';
import { RetailerSettingsComponent } from './retailer-settings/retailer-settings.component';
import { RetailerRewardCatalogueComponent } from './retailer-reward-catalogue/retailer-reward-catalogue.component';
import { RetailerPointMatrixComponent } from './retailer-point-matrix/retailer-point-matrix.component';
import { RetailerEnrollPlumberComponent } from './retailer-enroll-plumber/retailer-enroll-plumber.component';
import { ImportDistributorComponent } from './import-distributor/import-distributor.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';




const routes: Routes = [
  { 
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',component:HomeComponent
      },
      
      
      {path:'manage-users',component:ManageuserComponent,
    
    },
    {path:'imports',component:ImportDistributorComponent},
    {path:'product-management',component:ProductManagementComponent},
    {path:'push-notification',component:PushNotificationsComponent},

      //{path:'retailer',component:ManageretailerComponent},
      {path:'plumber',component:ManageplumberComponent},
      {
        path:'sale',component:SalereportComponent,
        
      },
      {
        path:'salesubmit',component:SaleSubmitComponent
      },
      {
        path:'purchasesubmit',component:PurchaseSubmitComponent
      },
      {
        path:'dsalesubmit',component:DistributersalesubmitComponent
      },
      {
        path:'rsalesubmit',component:RetailersalesubmitComponent
      },
      {
        path:'rpurchasesubmit',component:RetalerpurchasesubmitComponent
      },
      {
        path:'ppurchasesubmit',component:PlumberpurchasesubmitComponent
      },
      {path:'purchase',component:PurchasereportComponent},
      {path:'approve',component:ApprovereportComponent},
      {path:'userprofile',component:UsersprofileComponent},
      {path:'enroll-plumber',component:EnrollPlumberComponent},
      
      {path:'enroll-retailer',component:EnrollRetailerComponent},
      {path:'rewards-summary',component:RewardHistoryComponent},
      {path:'retailer',component:RetailerdashComponent},


      //distributer

      {path:'distributer/manage-user',component:DistributerManageUserComponent },

      //retailer viewable part only

      {path:'retailer/distributer-locator',component:DistributerLocatorComponent},
      {path:'retailer/transaction-report',component:TransactionReportsComponent},
      {path:'retailer/point-report',component:PointReportsComponent},
      {path:'retailer/feedback-status',component:FeedbackStatusComponent},
      {path:'retailer/plumber-reporting',component:PlumberReportingComponent},
      {path:'retailer/redemption-catalogue',component:ReedemptionCatalogueComponent},
      {path:'retailer/redemption-report',component:ReedemptionReportComponent},
      {path:'retailer/scheme-promotions',component:SchemePromotionsComponent},
    //retailer user management
      {path:'retailer/manage-user',component:RetailerManageUserComponent },
      {path:'retailer/profile',component:RetailerProfileComponent },
      {path:'retailer/sale-histroy',component:SaleHistoryComponent },
      {path:'retailer/sale-summary',component:SaleSummaryComponent },
      {path:'retailer/reedem-histroy',component:RetailerReedemHistoryComponent },
      {path:'retailer/rewards-summary',component:RewardHistoryComponent},
      {path:'retailer/schemes',component:RetailerSchemesComponent},
      {path:'retailer/promotions',component:RetailerPromotionsComponent},
      {path:'retailer/order-intent',component:RorderIntentComponent},
      {path:'retailer/feedback',component:RfeedbackComponent},
      {path:'retailer/support',component:RsupportComponent},
      {path:'retailer/settings',component:RetailerSettingsComponent},
      {path:'retailer/reward-catalogue',component:RetailerRewardCatalogueComponent},
      {path:'retailer/point-matrix',component:RetailerPointMatrixComponent},
      {path:'retailer/enroll-plumber',component:RetailerEnrollPlumberComponent},
      

      //import distributor

      
  



      
      

    ]
},



// {
//   path:"**",component:HomeComponent
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
