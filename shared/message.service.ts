import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url = 'https://sintextanks.evolvebrands.asia';
  sentOtp = '/api/User/SentOTP';
  verifyOtp = '/api/User/VerifyOTP';
  token = localStorage.getItem("d-token");
  sendOtpWithoutAuth = '/api/User/SentOTPCode';
  verifyOtpWithoutAuth = '/api/User/VerifyOTPCode';
  constructor(public http: HttpClient) {
    console.log("Message service works",)
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
  getraw(endpoint: string, params?: any, reqOpts?: any){
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };  
    }
    //this.setAuthorizationHeader(reqOpts);

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

  // sendOtp(data){
  //   this.get("",data).subscribe(
  //     res=>{
  //     console.log(res);
  //     },
  //     error=>{
  //       console.log(error)
  //     }
  //   ) 
  // }
}
