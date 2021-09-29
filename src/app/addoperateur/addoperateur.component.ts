import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Operateur } from '../operateur';
import { OperateurService } from '../operateur.service';

@Component({
  selector: 'app-addoperateur',
  templateUrl: './addoperateur.component.html',
  styleUrls: ['./addoperateur.component.css']
})
export class AddoperateurComponent implements OnInit {
operateur: Operateur ={ Id:0,Matricule:"", password:""}

  constructor(private operateurService : OperateurService,private location:Location) { }

  ngOnInit(): void {
  }
  save(){

    this.operateurService.saveOperateur(this.operateur)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
    let aler= alert("added successfully");

  }
  goBack(): void {
    this.location.back();
  }

}