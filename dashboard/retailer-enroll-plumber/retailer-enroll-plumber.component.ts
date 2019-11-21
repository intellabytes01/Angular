import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';
import { MessageService } from 'src/app/shared/message.service';

@Component({
  selector: 'app-retailer-enroll-plumber',
  templateUrl: './retailer-enroll-plumber.component.html',
  styleUrls: ['./retailer-enroll-plumber.component.scss']
})
export class RetailerEnrollPlumberComponent implements OnInit {
  stateList;
  isotpBtnDisabled:Boolean=true;
  plumberFrom:FormGroup;
  verifyOtp:FormGroup;
  constructor(
    private fb:FormBuilder,
    private appService:AppService,
    private messageService:MessageService

  ) {
    this.plumberFrom = this.fb.group({
      firstname:['',Validators.compose([Validators.required])],
      lastname:['',Validators.compose([])],
      mobileno:['',Validators.compose([Validators.required])],
      phoneno:['',Validators.compose([])],
      dob:['',Validators.compose([Validators.required])],
      email:['',Validators.compose([Validators.email])],
      addr1:['',Validators.compose([Validators.required])],
      addr2:['',Validators.compose([])],
      city:['',Validators.compose([])],
      state:['',Validators.required],
      pincode:['',Validators.compose([])],
      aadharno:['',Validators.compose([Validators.required])],
      aadharpic:['',Validators.compose([Validators.required])],
      pancardno:['',Validators.compose([Validators.required])],
      panpic:['',Validators.compose([Validators.required])],
      bankname:['',Validators.compose([])],
      bankacno:['',Validators.compose([])],
      ifsccode:['',Validators.compose([])],
      cancelledChequePic:['',Validators.compose([Validators.required])],
      selectanyone:['',Validators.compose([])],
      fileanyone:['',Validators.compose([])],
    });
    this.verifyOtp = this.fb.group({
      otpfield:['',Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
    
    //@here we call to get states
    this.appService.get(this.appService.stateList,{type:"state"}).subscribe((res:Config)=>{
      this.stateList = res.Items;
    })

  }


  savePlumber(){

    
    this.messageService.get(this.messageService.sentOtp,{"mobile":this.plumberFrom.value.mobileno,"role_type":this.appService.getRole}).subscribe((res:Config)=>{
      console.log(res);
      if(res.Success){
        this.isotpBtnDisabled = false;
      }
    },
    error=>{
      console.log(error)
    })
    
  }
  verifyPlumber(){
    // console.log(data)
    // console.log(this.plumberFrom.value.mobileno,this.verifyOtp.value.otpfield);
    // console.log(this.verifyOtp.value)
    this.messageService.get(this.messageService.verifyOtp,{"mobile":this.plumberFrom.value.mobileno,"OTP":this.verifyOtp.value.otprec}).subscribe((res)=>{
      console.log(res);
    })
  }



}
