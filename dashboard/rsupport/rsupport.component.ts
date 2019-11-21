import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-rsupport',
  templateUrl: './rsupport.component.html',
  styleUrls: ['./rsupport.component.scss']
})
export class RsupportComponent implements OnInit {

  supportForm:FormGroup;

  constructor(private fb:FormBuilder,private appService:AppService) { 
    this.supportForm = this.fb.group({
      title:['',Validators.compose([Validators.required])],
      message:['',Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }
  submtiMessage(){
    console.log(this.supportForm.value)
    this.appService.post(this.appService.sendSupport,this.supportForm.value).subscribe((res)=>{
      console.log(res)
    },
    error=>{
      console.log(error)
    })

  }

}
