import { Component, OnInit } from '@angular/core';
import { MethodisteService } from '../methodiste.service';
import { OperateurService } from '../operateur.service';
import { ProjetService } from '../projet.service';
import { ValidateurService } from '../validateur.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
nbProjet: number=0;
  nbMethodiste: number=0;
  nbOperateur: number=0;
  nbValidation: number=0;

  constructor(private projetService:ProjetService,
    private methodisteService:MethodisteService,
    private operateurService:OperateurService,
    private validateurService:ValidateurService) { }

  ngOnInit(): void {
  this.projetService.countProjet().subscribe(nb => this.nbProjet=nb );
  this.methodisteService.countmethodiste().subscribe(nb => this.nbMethodiste=nb );
  this.operateurService.countoperateur().subscribe(nb => this.nbOperateur=nb );
this.validateurService.countvalidation().subscribe(nb => this.nbValidation=nb);

  }
  toggleSidebar()
  {
       document.getElementById("wrapper")?.classList.toggle('toggled');
  }

}
