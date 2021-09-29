import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validation } from '../validation';
import { ValidationService } from '../validation.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-operateur-validation',
  templateUrl: './operateur-validation.component.html',
  styleUrls: ['./operateur-validation.component.css']
})
export class OperateurValidationComponent implements OnInit {

  constructor(private route :ActivatedRoute,
    private validationService:ValidationService,
    private httpClient: HttpClient,private modalService: NgbModal ,private location:Location ) { }
validations:Validation[]=[];
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

closeResult = '';
EmployeeList:any=[];

public FileUrl:any ='http://127.0.0.1:8000/media/';

  ngOnInit(): void {
    this.getValidation();
    this.refreshEmpList();

  }
  getValidation(): void {
    this.validationService.getValidation().subscribe(validations =>{
      this.validations = validations;
      validations.forEach(validation =>console.log(validation.Id_val))
    });}
  
    refreshEmpList(){
      this.validationService.getEmpList().subscribe(data=>{
        this.EmployeeList=data;
      });
    }}