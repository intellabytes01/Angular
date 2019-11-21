import { Component, OnInit, NgModule, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { RetailerDataService } from 'src/app/service/retailer.service';
import { OnlyNumber } from 'src/app/shared/onlynumber.directive';
import { MessageService } from 'src/app/shared/message.service';
import { Config } from 'protractor';
import { config } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
declare var $ :any;


@NgModule({
  declarations: [OnlyNumber]
})
@Component({
  selector: 'app-enroll-retailer',
  templateUrl: './enroll-retailer.component.html',
  styleUrls: ['./enroll-retailer.component.scss'],
  viewProviders: [OnlyNumber]
})
export class EnrollRetailerComponent implements OnInit {
  wizardBox = true;
  Status;
  isSubmit = false;
  isOtpSend;
  stateList = [];
  basicForm :FormGroup;
  contactForm:FormGroup;
  plumberForm:FormGroup;
  kycForm:FormGroup;
  verifyOTPForm:FormGroup;
  mergeObjects:{};
  userData:any;
  isError: any;
  errorMessage: string;

  distributors = [];
  @ViewChild('modalClose') modalClose: ElementRef;
  ngOnInit() {
  }

  showSelection = false;

  setNameValue(value){
    this.showSelection = false;
    this.basicForm.controls['selectDistributer'].setValue(value);
  }
  
  constructor(private _elementRef : ElementRef,private fb:FormBuilder,private appService:AppService, private retailerDataService:RetailerDataService,private messages:MessageService) {

    this.basicForm = this.fb.group({
      selectDistributer:['',Validators.required],
      firstname:['',Validators.required,Validators.compose([])],
      lstname:['',Validators.compose([Validators.required])],
      gender:['',Validators.compose([Validators.required])],
      dob:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      MaritalStat:['',Validators.compose([Validators.required])],
      addrBasic:['',Validators.compose([Validators.required])],
      doa:['',Validators.compose([Validators.required])]
    });

    this.contactForm = this.fb.group({
      mobile:['',Validators.compose([Validators.minLength(10),Validators.maxLength(10),Validators.required])],
      phone:['',Validators.compose([Validators.required,Validators.maxLength(10),])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      gstin:['',Validators.required,Validators.compose([])],
      addr2:['',Validators.required,Validators.compose([])],
      state:['',Validators.required,Validators.compose([])],
      city:['',Validators.required,Validators.compose([])],
      area:['',Validators.required,Validators.compose([])],   
      pincode:['',Validators.required,Validators.compose([])]
    });

    this.plumberForm = this.fb.group({
      plumber1:['',Validators.required,Validators.compose([])],
      plumber2:['',Validators.required,Validators.compose([])],
      plumber3:['',Validators.required,Validators.compose([])],
    });
    this.kycForm = this.fb.group({
      shoppic:['',Validators.compose([Validators.required])],
      aadhar:['',Validators.compose([Validators.required])],
      gstdoc:['',Validators.compose([Validators.required])],
      selectanyone:['',Validators.compose([Validators.required])],
      anyonedoc:['',Validators.compose([Validators.required])]
    });
    this.verifyOTPForm = this.fb.group({
      verotp:['',Validators.compose([Validators.required,Validators.minLength(4)])]
    });

    

    this.userData = this.retailerDataService.formatRetailerData();
    
  }
  

  filterDistributor(data){
    console.log(data.target.value)
    setTimeout(()=>{
    this.retailerDataService.get(this.retailerDataService.getList,{"type":data.target.value}).subscribe((res:Config)=>{
      this.showSelection = true;
      if(res.Items != null){
        this.distributors = res.Items;
      }else{
        this.distributors = [];
      }
    })
    },1000)
    
  }

  basicInfo() {
    this.userData.basicDetails = this.basicForm.value;
    console.log( this.userData);
    this.appService.get(this.appService.stateList,{"type":'state'}).subscribe((res:Config)=>{
      
      this.stateList = res.Items;
      console.log(this.stateList);
    });
  }

  contactInfo() {
    this.userData.contactDetails = this.contactForm.value;
    
    console.log(this.userData);
  }

  plumberInfo() {
    this.userData.plumberDetails = this.plumberForm.value;
    console.log(this.userData)
    this.messages.get(this.messages.sentOtp,{"mobile":this.userData.contactDetails.mobile,role_type:3}).subscribe(
      res=>{
      
        console.log(res);
        this.isSubmit = true;

      },
      error=>{
        console.log(error);
        this.isSubmit = false;
        return 0;
      }
    );
   
    
  }
  verifyOTP(){
   
      this.messages.get(this.messages.verifyOtp,{"mobile":this.userData.contactDetails.mobile,"otp":this.verifyOTPForm.value.verotp}).subscribe(
        (res:Config)=>{
          
          if(res.Success){
            console.log(res.Success);
            this.isError = false;
            
            this.wizardBox= false;
             this.mergeObjects=Object.assign({},this.userData.basicDetails,
              this.userData.contactDetails,
              this.userData.plumberDetails,{"is_phone_confirmed":1});
              console.log(this.mergeObjects)
            this.retailerDataService.post(this.retailerDataService.enrollRetailer,this.mergeObjects).subscribe(
              (res)=>{
                console.log(res)
                console.log("enroll done")
                this.closeModal();
              },
              (error)=>{

              }
            )
            
          }
          else{
            this.isError = true;
            this.errorMessage="Enter Valid OTP"
            console.log(res)
          }
        },
        error=>{
          console.log(error)
        }
      )
      
  }

  private closeModal(): void {
    this.modalClose.nativeElement.click();
}

gotoprev(){
  this.wizardBox= true;
}

}
