
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppService } from '../shared/app.service';





@Injectable({
  providedIn: 'root'
})
export class RetailerDataService {  

  url='https://sintextanks.evolvebrands.asia';
  getList = '/api/DropDownList/GetList';
  enrollRetailer = '/api/Retailer/EnrollRetailer';
  getRetailerProfile ='/api/Retailer/GetProfile';
  updateRetailerProfile = '/api/Retailer/UpdateProfile';
  userDetails:any = {};
  token = localStorage.getItem("d-token");
  dataFromApi:any;

  constructor(private appService: AppService,private http:HttpClient) {
   // console.log("checklogin service works")
    // this.appService.post('', '').subscribe((data)=>{
    //     this.dataFromApi = data;
    // });
  }  

  formatRetailerData(){

    //populate basic deatils
    let basicDetails = {};
    basicDetails['doa'] = this.dataFromApi;
    this.userDetails['basicDetails'] = basicDetails;


    return this.userDetails;
  }



  setAuthorizationHeader(reqOpts){    
    let headers = new HttpHeaders();
    reqOpts.headers = headers.append('Authorization', this.token);
    //console.log(reqOpts);
  }

  get(endpoint: string, params?: any, reqOpts?: any){
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };  
    }
    this.setAuthorizationHeader(reqOpts);

    //console.log(reqOpts);

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }
  post(endPoint: string, body: any, reqOpts?: any) {

    if(!reqOpts){
      reqOpts = { };
    }
     
    this.setAuthorizationHeader(reqOpts);
    return this.http.post(this.url + endPoint, body, reqOpts);
  }
  







  



  
}
