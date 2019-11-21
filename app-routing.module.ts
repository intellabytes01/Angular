import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
