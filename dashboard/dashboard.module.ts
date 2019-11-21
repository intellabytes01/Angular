import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';


import { ManageretailerComponent } from './manageretailer/manageretailer.component';
import { ManageplumberComponent } from './manageplumber/manageplumber.component';
import { SalereportComponent } from './salereport/salereport.component';
import { PurchasereportComponent } from './purchasereport/purchasereport.component';
import { ApprovereportComponent } from './approvereport/approvereport.component';
import { UsersprofileComponent } from './usersprofile/usersprofile.component';
import { SaleSubmitComponent } from './sale-submit/sale-submit.component';
import { DistributersalesubmitComponent } from './distributersalesubmit/distributersalesubmit.component';
import { RetailersalesubmitComponent } from './retailersalesubmit/retailersalesubmit.component';

import { PlumberpurchasesubmitComponent } from './plumberpurchasesubmit/plumberpurchasesubmit.component';
import { RetalerpurchasesubmitComponent } from './retalerpurchasesubmit/retalerpurchasesubmit.component';
import { PurchaseSubmitComponent } from './purchase-submit/purchase-submit.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EnrollRetailerComponent } from './enroll-retailer/enroll-retailer.component';
import { EnrollPlumberComponent } from './enroll-plumber/enroll-plumber.component';
import { TranslateModule } from '@ngx-translate/core';
import { ArchwizardModule } from 'ng2-archwizard';
import { OnlyNumber } from '../shared/onlynumber.directive';
import { RewardHistoryComponent } from './reward-history/reward-history.component';
import { RetailerdashComponent } from './retailerdash/retailerdash.component';
import { DistributerLocatorComponent } from './distributer-locator/distributer-locator.component';
import { TransactionReportsComponent } from './transaction-reports/transaction-reports.component';
import { PointReportsComponent } from './point-reports/point-reports.component';
import { ReedemptionCatalogueComponent } from './reedemption-catalogue/reedemption-catalogue.component';
import { ReedemptionReportComponent } from './reedemption-report/reedemption-report.component';
import { PlumberReportingComponent } from './plumber-reporting/plumber-reporting.component';
import { SchemePromotionsComponent } from './scheme-promotions/scheme-promotions.component';
import { OrderIndentComponent } from './order-indent/order-indent.component';
import { FeedbackStatusComponent } from './feedback-status/feedback-status.component';
import { RetailerManageUserComponent } from './retailer-manage-user/retailer-manage-user.component';
import { DistributerManageUserComponent } from './distributer-manage-user/distributer-manage-user.component';
// import { RetailerManageUserComponent } from './retailer-manage-user/retailer-manage-user.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
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





@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    ArchwizardModule,
    VirtualScrollerModule,
    
  ],
  declarations: [ 
    OnlyNumber, HomeComponent, HeaderComponent, SidebarComponent, ManageuserComponent, ManageretailerComponent, ManageplumberComponent, SalereportComponent, PurchasereportComponent, ApprovereportComponent, UsersprofileComponent, SaleSubmitComponent, DistributersalesubmitComponent, RetailersalesubmitComponent,  PlumberpurchasesubmitComponent, RetalerpurchasesubmitComponent, PurchaseSubmitComponent, DashboardComponent, EnrollRetailerComponent, EnrollPlumberComponent, RewardHistoryComponent, RetailerdashComponent, DistributerLocatorComponent, TransactionReportsComponent, PointReportsComponent, ReedemptionCatalogueComponent, ReedemptionReportComponent, PlumberReportingComponent, SchemePromotionsComponent, OrderIndentComponent, FeedbackStatusComponent, RetailerManageUserComponent, DistributerManageUserComponent, RetailerProfileComponent, SaleHistoryComponent, SaleSummaryComponent, RetailerReedemHistoryComponent, RetailerSchemesComponent, RetailerPromotionsComponent, RorderIntentComponent, RfeedbackComponent, RsupportComponent, RetailerSettingsComponent, RetailerRewardCatalogueComponent, RetailerPointMatrixComponent, RetailerEnrollPlumberComponent, ImportDistributorComponent, ProductManagementComponent, PushNotificationsComponent]
})
export class DashboardModule { }
