import { Component, OnInit } from '@angular/core';
import { Projet } from '../projet';
import { ProjetvalidateurService } from '../projetvalidateur.service';

@Component({
  selector: 'app-projetvalidateur',
  templateUrl: './projetvalidateur.component.html',
  styleUrls: ['./projetvalidateur.component.css']
})
export class ProjetvalidateurComponent implements OnInit {

  constructor(private projetService:ProjetvalidateurService) { }
  projets: Projet[]=[];
    ngOnInit(): void {
  this.getProjet();
    }
    getProjet(): void {
      this.projetService.getProjet().subscribe(projets =>{
        this.projets = projets;
        projets.forEach(projet =>console.log(projet.projectId))
      });}
      delete(projet: Projet): void {
        this.projets= this.projets.filter(h => h !== projet);
        this.projetService.deleteProjet(projet.projectId).subscribe();
      }
  
}
