import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-retailer-settings',
  templateUrl: './retailer-settings.component.html',
  styleUrls: ['./retailer-settings.component.scss']
})
export class RetailerSettingsComponent implements OnInit {
  chagePasswordForm:FormGroup;
  messageStatus:boolean;
  messageClass;
  messageString;
  constructor(private fb:FormBuilder,private appService:AppService) { 
    this.chagePasswordForm = this.fb.group({
      oldpass:['',Validators.compose([Validators.required])],
      newpass:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      confpass:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    })
  }

  ngOnInit() {

  }

  updatePassword(){
    
    console.log(this.appService.userName);
    console.log(this.chagePasswordForm.value)
    if(this.chagePasswordForm.value.newpass != this.chagePasswordForm.value.confpass){
        this.messageStatus=true;
        this.messageClass="alert alert-danger";
        this.messageString="Confirm password is not valid";
      return 0;
    }
    this.appService.post(this.appService.chagePassword,{"username":this.appService.userName,"old_password":this.chagePasswordForm.value.oldpass,"new_password":this.chagePasswordForm.value.newpass}).subscribe((res:Config)=>{
      console.log(res)
      
      if(res.Success){
        this.messageStatus=true;
        this.messageClass="alert alert-success";
        this.messageString=res.Message;
        setTimeout(()=>{
          this.messageStatus=false;
        },5000)
      }
      else{
        this.messageStatus=true;
        this.messageClass="alert alert-danger"
        this.messageString=res.Message;
      }

    })
  }

}
