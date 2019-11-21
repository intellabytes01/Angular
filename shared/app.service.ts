import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {


  sideBarToggleSubject:Subject<boolean> = new Subject<boolean>();

  changeState(toggledState:boolean){
      this.sideBarToggleSubject.next(toggledState);
  }

  


  
 

 
  constructor(public http: HttpClient) {
    console.log("shared app service works")
  }  
  
  

}
