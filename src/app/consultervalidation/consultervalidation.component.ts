import { ValidataiondetailService } from './../validataiondetail.service';
import { ValidationService } from './../validation.service';
import { Component, OnInit } from '@angular/core';
import { Validation } from '../validation';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-consultervalidation',
  templateUrl: './consultervalidation.component.html',
  styleUrls: ['./consultervalidation.component.css']
})
export class ConsultervalidationComponent implements OnInit {

  constructor(private route :ActivatedRoute,
    private validationService:ValidationService,
    private validataiondetailService:ValidataiondetailService  ,private httpClient: HttpClient,private modalService: NgbModal ,private location:Location ) { }
validations:Validation[]=[];
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
    }
   


}
