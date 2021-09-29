import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { ProjetService } from '../projet.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addprojet',
  templateUrl: './addprojet.component.html',
  styleUrls: ['./addprojet.component.css']
})
export class AddprojetComponent implements OnInit {
  projet : Projet = {
    projectId: 0, projectName: "", REFName: "",
  
  }
  msg : string ="";

  constructor(private projetService : ProjetService , private location:Location) { }

  ngOnInit(): void {
  }
  save(){
    this.projetService.saveProjet(this.projet)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
let aler= alert("added successfully");
  }
  goBack(): void {
    this.location.back();
  }
  
}
