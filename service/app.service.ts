
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class AppService {  

  url = 'https://sintextanks.evolvebrands.asia';
  userName = localStorage.getItem('d-username');
  token = localStorage.getItem("d-token");
  getRole = localStorage.getItem('d-role');
  getName = localStorage.getItem("d-name");

  login = '/api/User/Authenticate';
  register = '/api/User/CreateUser';
  stateList = '/api/DropDownList/GetList';
  kycUrl = '/api/KYCHandler/AddKYC';
  chagePassword = '/api/User/ChangedPassword';
  enrollPlumber = '/api/Plumber/EnrollPlumber';
  pushImport = '/api/FileUploader/UploadFile/?type=';
  getRetailerCatalogue = '/api/Product/GetRetailerCatalogue';
  productList = '/api/Product/GetProductList?search=';
  updateNewPass = '/api/User/UpdateNewPassword';
  sendSupport = '/api/Support/SendSupport';
  pushNotification ='/api/PushNotification/NotificationToUsers';
  getRetailerByRole = '/api/Retailer/GetRetailerList';
  getRetailerDropdown = '/api/DropDownList/GetList';
  constructor(public http: HttpClient) {
    console.log("checklogin service works");
  }  
  
  setAuthorizationHeader(reqOpts){    
    let headers = new HttpHeaders();
    reqOpts.headers = headers.append('Authorization', this.token);
    console.log(reqOpts);
  }
  
  post(endPoint: string, body: any, reqOpts?: any) {
    
    if(!reqOpts){
      reqOpts = { };
    }
     
    this.setAuthorizationHeader(reqOpts);
    return this.http.post(this.url + endPoint, body, reqOpts);
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
  postraw(endPoint: string, body: any, reqOpts?: any) {
    
    if(!reqOpts){
      reqOpts = { };
    }
     
    
    return this.http.post(this.url + endPoint, body, reqOpts);
    }


    logout(){
    
      localStorage.removeItem("d-token");
  
   }
}

