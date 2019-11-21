import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetailerDataService } from 'src/app/service/retailer.service';
import { Config } from 'protractor';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.scss']
})
export class RetailerProfileComponent implements OnInit {

  userprofile:FormGroup;
  responseModified:any;
  isAlertShown;
alertClass;
alertMessage;




  constructor(private fb:FormBuilder,private retailerService:RetailerDataService) { 
    this.userprofile = this.fb.group({
      firstName:['',Validators.compose([Validators.required])],
      lastName:[''],
      mobileNo:['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      email:[''],
      addr1:[''],
      addr2:[''],
      city:[''],
      pincode:['']
    })
  }


  ngOnInit() {

    this.retailerService.get(this.retailerService.getRetailerProfile).subscribe((res:Config)=>{
      this.responseModified = res;
      this.userprofile.get('firstName').setValue(res.Item.firstname);
      this.userprofile.get('lastName').setValue(res.Item.lastname);
      this.userprofile.get('mobileNo').setValue(res.Item.mobile_number);
      this.userprofile.get('email').setValue(res.Item.email);
      this.userprofile.get('addr1').setValue(res.Item.address_1);
      this.userprofile.get('addr2').setValue(res.Item.address_2);
      this.userprofile.get('city').setValue(res.Item.city);
      this.userprofile.get('pincode').setValue(res.Item.pincode);
 

    })
  }


  updateProfile(){

    this.responseModified.Item['firstname'] = this.userprofile.get('firstName').value;
    this.responseModified.Item['lastname'] = this.userprofile.get('lastName').value;
    this.responseModified.Item['mobile_number'] = this.userprofile.get('mobileNo').value;
    this.responseModified.Item['email'] = this.userprofile.get('email').value;
    this.responseModified.Item['address_1'] = this.userprofile.get('addr1').value;
    this.responseModified.Item['address_2'] = this.userprofile.get('addr2').value;
    this.responseModified.Item['city'] = this.userprofile.get('city').value;
    this.responseModified.Item['pincode'] = this.userprofile.get('pincode').value;
    
    this.retailerService.post(this.retailerService.updateRetailerProfile,this.responseModified.Item).subscribe((res:Config)=>{
      console.log(res);
      if(res.Success){
        this.isAlertShown=true;
        this.alertClass="alert alert-success"
        this.alertMessage=res.Message;
      }
      else{
        this.isAlertShown=true;
        this.alertClass="alert alert-danger"
        this.alertMessage=res.Message;
      }
    },
    error=>{
      this.isAlertShown=true;
        this.alertClass="alert alert-danger"
        this.alertMessage=error.Message;
    })

  }
 

}
