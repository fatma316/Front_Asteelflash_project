import { Location } from '@angular/common';
import { ValidationService } from './../validation.service';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Validation } from '../validation';
import { FormBuilder, FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpErrorResponse, HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-projet-validation',
  templateUrl: './projet-validation.component.html',
  styleUrls: ['./projet-validation.component.css']
})
export class ProjetValidationComponent implements OnInit {

  validations : Validation[]=[];
  validation : Validation = {Id_val:0, NomValidation: "",NomMethodiste:"",file: ""
}

@Input() emp:any;
FileName:String | undefined;
FileNamePath:String | undefined;
NomMethodiste:String | undefined;
NomValidateur1:String | undefined;
NomValidateur2:String | undefined;
Dep1:String | undefined;
Dep2:String | undefined;
etat:String | undefined;
etat2:String | undefined;

date_deb:Date | undefined;
date_fin:Date | undefined;


  constructor(private ValidationService:ValidationService ,private location:Location,
    private cd: ChangeDetectorRef,private FormBuilder:FormBuilder, private httpClient:HttpClient)
{ 

 }


  
  ngOnInit(): void {
    this.getValidation();
  }
  save(){

    this.ValidationService.saveValidation(this.validation)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
let aler= alert("added successfully");
  }
  goBack(): void {
    this.location.back();
  }


  getValidation(): void {
    this.ValidationService.getValidation().subscribe(validations =>{
      this.validations = validations;
      validations.forEach(validation =>console.log(validation.Id_val))
    });}
  
uploadFile(event: any)
{
  var file=event.target.files[0];
  const formData:FormData=new FormData();
  formData.append('uploadedFile',file,file.name);
  this.ValidationService
  .UploadFile(formData).subscribe((data:any)=>
  {
    this.FileName=data.toString();
    this.FileNamePath=this.ValidationService.FileUrl+this.FileName;
  }
  )

}

/*ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff*/
addEmployee(){
  var val = {FileName:this.FileName,
    NomMethodiste:this.NomMethodiste,
    NomValidateur1:this.NomValidateur1,
    NomValidateur2:this.NomValidateur2,
    Dep1:this.Dep1,
    Dep2:this.Dep2,
    etat:this.etat,
    etat2:this.etat2,

    date_deb:this.date_deb,
    date_fin:this.date_fin

             };

  this.ValidationService.addEmployee(val).subscribe(res=>{
    alert(res.toString());
  });
}

updateEmployee(){
  var val = {FileName:this.FileName,
    NomMethodiste:this.NomMethodiste,
    NomValidateur1:this.NomValidateur1,
    NomValidateur2:this.NomValidateur2,
    Dep1:this.Dep1,
    Dep2:this.Dep2,
    etat:this.etat,
    etat2:this.etat2,

    date_deb:this.date_deb,
  };

  this.ValidationService.updateEmployee(val).subscribe(res=>{
  alert(res.toString());
  });
}



}
