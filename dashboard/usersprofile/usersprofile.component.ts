import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-usersprofile',
  templateUrl: './usersprofile.component.html',
  styleUrls: ['./usersprofile.component.scss']
})
export class UsersprofileComponent implements OnInit {
  private data:String;
  type:String = "Distributer";
  name:String = "Prakhar Mathur";
  status:String = "Active"
  errorMessage:String = "";
  errorClass:String = "";
  userProfile:FormGroup;
  credentialsData:FormGroup;
  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder) {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    console.log(queryParams);
    this.userProfile = this.fb.group({
      firstname:[''],
      secondname:[''],
      email:[''],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(11),RegExp]],
      usertype:['',Validators.required],
      userstatus:['',Validators.required]

    });
    this.credentialsData = this.fb.group({
        password:['',[Validators.required,Validators.minLength(8)]],
        repassword:['',[Validators.required,Validators.minLength(8)]]
    })




   }

  ngOnInit() {
  
    
  }

  UserClick(userData:FormGroup){
    console.log(userData.value)
  }
  CredentaialsClick(credentailData){
    console.log(credentailData.value);
    if(credentailData.value.password !=credentailData.value.repassword){
      this.errorMessage = "Password not valid";
      this.errorClass = "text-danger"
    }
  }





}
