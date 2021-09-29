import { FreeapiService } from './../freeapi.service';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../projet.service';
import { Projet } from '../projet';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor(private projetService:ProjetService, private freeapiservice:FreeapiService) { }

projets: Projet[]=[];
REFName:any;
  ngOnInit(): void {
this.getProjet();


  }
  getProjet(): void {
    this.projetService.getProjet().subscribe(projets =>{
      this.projets = projets;
      projets.forEach(projet =>console.log(projet.projectId))
    });}
    delete(projet: Projet): void {
      let conf = confirm("Are You Sure ?");
      if (conf)
      this.projets= this.projets.filter(h => h !== projet);
      this.projetService.deleteProjet(projet.projectId).subscribe();
    }
  Search()
  {
    if(this.REFName ==""){
      this.ngOnInit();
    }
    else {
      this.projets=this.projets.filter(res=>{
        return res.REFName.toLocaleLowerCase().match(this.REFName.toLocaleLowerCase());
      })
    }

  }

}
