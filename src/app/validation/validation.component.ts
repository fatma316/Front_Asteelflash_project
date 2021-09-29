import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ValidationService } from '../validation.service';
import { Validation } from '../validation';
import { ValidataiondetailService } from '../validataiondetail.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  validation : Validation = {Id_val:0, NomValidation: "",NomMethodiste:"",
  
file: ""

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
date_deb:Date | undefined;
date_fin:Date | undefined;

closeResult = '';

  constructor( private route :ActivatedRoute,
    private validataiondetailService:ValidataiondetailService,
    private location:Location,private modalService: NgbModal,    private ValidationService:ValidationService
    ) { }

    ngOnInit(): void {
      this.getvalidation();
    }
    getvalidation():void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.validataiondetailService.getOne(id).subscribe(validation=> this.validation = validation);
    }
   
    goBack(): void {
      this.location.back();
    }
    save():void {
      this.validataiondetailService.updateValidation(this.validation).subscribe(()=>this.goBack());
      let aler= alert("etat is modified");

   }

   updateEmployee(){
    var val = {FileName:this.FileName,
      NomMethodiste:this.NomMethodiste,
      NomValidateur1:this.NomValidateur1,
      NomValidateur2:this.NomValidateur2,
      Dep1:this.Dep1,
      Dep2:this.Dep2,
      etat:this.etat,
      date_deb:this.date_deb,
    };
  
    this.ValidationService.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }

 /* updateEtat(){
    var val = {
      etat:this.etat,
      etat2:this.etat,

    };
  if(val.etat=="valid" || val.etat2=="valid")
    this.ValidationService.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }*/ 
  

}
