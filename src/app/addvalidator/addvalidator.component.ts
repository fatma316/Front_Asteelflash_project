import { Component, OnInit } from '@angular/core';
import { Validateur } from '../validateur';
import { ValidateurService } from '../validateur.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addvalidator',
  templateUrl: './addvalidator.component.html',
  styleUrls: ['./addvalidator.component.css']
})
export class AddvalidatorComponent implements OnInit {
  validateur :Validateur ={ Id:0,
    email:"" , 
    password:"",
    Department:""}
  constructor(private validateurService : ValidateurService,private location:Location) { }

  ngOnInit(): void {
  }
  save(){
    this.validateurService.saveOperateur(this.validateur)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
let aler= alert("added successfully");
  }
  goBack(): void {
    this.location.back();
  }

}
