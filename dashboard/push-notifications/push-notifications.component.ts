import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';


@Component({
  selector: 'app-push-notifications',
  templateUrl: './push-notifications.component.html',
  styleUrls: ['./push-notifications.component.scss']
})
export class PushNotificationsComponent implements OnInit {

 
  pushNotificationForm:FormGroup;
  userList;
  userId =[];
  isAlertShown:boolean = false;
  alertClass;
alertMessage;
  constructor(private fb:FormBuilder,private appService:AppService) { 
    this.pushNotificationForm = this.fb.group({
      
      title:['',Validators.compose([Validators.required])],
      message:['',Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
   
    this.appService.get(this.appService.getRetailerDropdown,{"type":"retailer"}).subscribe((res:Config)=>{
      this.userList=res.Items;
      console.log("this is userlist"+res.Items)
      this.userList.forEach(element => {
        element.selected = false;
      });
    })
  }
  submtiMessage(){
    console.log(this.pushNotificationForm.value)
    console.log(Object.assign({},this.pushNotificationForm.value,{"ids":this.userId}));
    this.appService.post(this.appService.pushNotification,Object.assign({},this.pushNotificationForm.value,{"ids":this.userId})).subscribe((res:Config)=>{
      console.log(res);
      if(res.Success){
        this.isAlertShown = true;
        this.alertClass = "alert alert-success"
        this.alertMessage = res.Message;
      }
      else{
        this.isAlertShown = true;
        this.alertClass = "alert alert-danger"
        this.alertMessage = res.Message;
      }


    },
    error=>{
      console.log(error)
    })

  }
  selectUser(item){
    item.selected = !item.selected;
    if(item.selected){
      
      this.userId.push(item.pk_user_id); 
      console.log("current arrya is " + this.userId);
    }
    else{
      var removeItemIndex = this.userId.indexOf(item.pk_user_id);

      if(removeItemIndex!=-1){
      
         this.userId.splice(removeItemIndex, 1);
      }
      console.log("current arrya is " + this.userId);
    }
  }

}

