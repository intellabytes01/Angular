import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppService } from "../../service/app.service";
import { Router } from "@angular/router";
import { Config } from "protractor";
import { MessageService } from "src/app/shared/message.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
 
  log_message: String;
  log_messageShow: boolean = false;
  log_messageLook: String;
  isShown: boolean = true;
  isLoading: boolean = false;
  loginForm: FormGroup;
  
  getOtpText: String = "Get OTP";
  forgotFormWithoutOtp: FormGroup;
  forgotFormWithOtp: FormGroup;
  
  ispasswordFormShown: boolean =true;
  changePassForm: FormGroup;
  isAlertShown:boolean = false;
  alertClass: string;
  alertMessage: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private checkLogin: AppService,
    private messageService:MessageService,
    private appService: AppService
  ) {
    this.loginForm = this.fb.group({
      mobileL: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ])
      ],
      passwordL: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)])
      ]

    });
    this.forgotFormWithoutOtp = this.fb.group({
      recoverMobile: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ])
      ],
      

    });
    this.forgotFormWithOtp = this.fb.group({
      recoverMobile: [
        "",
        Validators.compose([
          Validators.required,
          
        ])
      ],
      otp:[""]
      

    });
    this.changePassForm = this.fb.group({
      p1:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      p2:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    })

    //$("body .page-container").addClass("login-page");
  }

  ngOnInit() { }

  login(loginData) {
    //this.router.navigate(['/dashboard']);
    this.isLoading = true;
    console.log(loginData.value);

    this.checkLogin
      .postraw(this.checkLogin.login, {
        username: loginData.value.mobileL,
        password: loginData.value.passwordL
      })
      .subscribe((response: Config) => {
        
        
        console.log("this is prev condition" + response);

        if (response.responseMsg.StatusCode==200) {
          console.log("this is after condition"+response);
          //hit api and move to create bot page

          if (typeof Storage !== "undefined") {
            // Code for localStorage/sessionStorage.
            localStorage.setItem("d-token", response.Token);
            localStorage.setItem("d-username", loginData.value.mobileL);
            localStorage.setItem("d-role", response.role_id);
            
            
            
          }

          this.isLoading = false;

          console.log(
            "%c User is  registered! ",
            "color: #bada55;font-size:20px"
          );
          this.router.navigate(['/dashboard']);
          
        } else {
          //write error
         
          this.isLoading = false;
        }
      },error=>{
        
        this.log_messageShow = true;
        this.log_message = "Enter Valid Credentials";
        this.log_messageLook = "alert alert-danger";
        this.isLoading = false;
        console.log(error)
      });
  }


  recover() {
   
      
     
      this.messageService.getraw(this.messageService.sendOtpWithoutAuth,{"mobile":this.forgotFormWithoutOtp.value.recoverMobile}).subscribe((res:Config)=>{
        console.log(res);
        this.isLoading = true;
        if(res.Success){
          this.isShown = !true;
          this.isLoading = false;
        }
       
      });
    }
      verifyOtp() {
        
        
        this.isLoading = true;
        this.messageService.getraw(this.messageService.verifyOtpWithoutAuth,{"mobile":this.forgotFormWithOtp.value.recoverMobile,"OTP":this.forgotFormWithOtp.value.otp}).subscribe((res:Config)=>{
          console.log(res);

          if(res.Success){
            this.ispasswordFormShown = false;
            this.isLoading =false;
          }
        });
      }
      changePass( ){
        
        if(this.changePassForm.value.p1 !=this.changePassForm.value.p2){
          this.isAlertShown= true;
          this.alertClass = "alert alert-danger";
          this.alertMessage = "Password not matched"
          return 0;
          
        }
        this.appService.postraw(this.appService.updateNewPass,{"username":this.forgotFormWithOtp.value.recoverMobile,"new_password":this.changePassForm.value.p2}).subscribe(
          (res:Config)=>{
            this.isLoading = true;
              console.log(res);
              if(res.Success){
                this.isAlertShown= true;
                this.alertClass = "alert alert-success";
                this.alertMessage = res.Message;
                this.isLoading = false;
                setTimeout(()=>{
                  location.reload();
                },2000)
                
              }
              else{
                this.isLoading = false;
              }
             
          }
          ,
          error=>{
            this.isLoading = false;
          }
        )

      }
    
    
   
    

  
}
