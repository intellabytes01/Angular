import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-import-distributor',
  templateUrl: './import-distributor.component.html',
  styleUrls: ['./import-distributor.component.scss']
})
export class ImportDistributorComponent implements OnInit {
  myFile = '';
  importForm:FormGroup;
  isShown:true;
  alertClass:String;
alertMessage:String;


selectPerson = [
  {title:"Distributor Import",value:"distributor_import"},
  {title:"Retailer Import",value:"retailer_import"},
  {title:"Product Retail Catalogue Import",value:"product_retail_catalogue_import"},
  {title:"Products Import",value:"products_import"}

];
  constructor(private fb:FormBuilder,private appService:AppService) {
    this.importForm = this.fb.group({
      importFile:['',Validators.required],
      selectType:['',Validators.required]
    })
   }

  ngOnInit() {
   
  }
  import(){
    let frmData = new FormData();
    
   
      frmData.append("",this.myFile);
    
    console.log(frmData);
    this.appService.post(this.appService.pushImport+this.importForm.value.selectType,frmData).subscribe((res:Config)=>{
      console.log(res);
      if(res.StatusCode==201){
        this.isShown=true;
        this.alertClass = "alert alert-success";
        this.alertMessage = res.Message;
      }
      else{
        this.isShown=true;
        this.alertClass = "alert alert-danger";
        this.alertMessage = res.Message;
      }
      
     
    })
  }

  getFileDetails (e) {
    //console.log (e.target.files);
      this.myFile = e.target.files[0];
    
  }

}
