import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditoperateurService } from '../editoperateur.service';
import { Operateur } from '../operateur';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editoperateur',
  templateUrl: './editoperateur.component.html',
  styleUrls: ['./editoperateur.component.css']
})
export class EditoperateurComponent implements OnInit {
  operateur:Operateur={Id:0,Matricule:"",password:""}

  constructor(private route :ActivatedRoute,private editoperateurService:EditoperateurService,
    private location:Location) { }

  ngOnInit(): void {
    this.getoperateur();
  }
  getoperateur():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.editoperateurService.getOne(id).subscribe(operateur=> this.operateur = operateur);
  }
  goBack(): void {
    this.location.back();
  }
  save():void {
    this.editoperateurService.updateOperateur(this.operateur).subscribe(()=>this.goBack());
    let aler= alert("added successfully");

  }


}
