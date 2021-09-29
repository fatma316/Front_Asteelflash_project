import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjetdetailService } from '../projetdetail.service';
@Component({
  selector: 'app-editprojet',
  templateUrl: './editprojet.component.html',
  styleUrls: ['./editprojet.component.css']
})
export class EditprojetComponent implements OnInit {
projet : Projet = {
  projectId: 0, projectName: "", REFName: "",

}
constructor( private route :ActivatedRoute,
  private projetdetailService:ProjetdetailService,
  private location:Location) { }


  ngOnInit(): void {
    this.getprojet();
  }
  getprojet():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projetdetailService.getOne(id).subscribe(projet=> this.projet = projet);
  }
  goBack(): void {
    this.location.back();
  }
  save():void {
    this.projetdetailService.updateProjet(this.projet).subscribe(()=>this.goBack());
    let aler= alert("added successfully");

  }

}
