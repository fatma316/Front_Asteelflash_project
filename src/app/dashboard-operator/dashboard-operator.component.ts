import { Component, OnInit } from '@angular/core';
import { MethodisteService } from '../methodiste.service';
import { OperateurService } from '../operateur.service';
import { ProjetService } from '../projet.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-dashboard-operator',
  templateUrl: './dashboard-operator.component.html',
  styleUrls: ['./dashboard-operator.component.css']
})
export class DashboardOperatorComponent implements OnInit {
  nbProjet: number=0;
  nbMethodiste: number=0;
  nbOperateur: number=0;
  nbValidation: number=0;

  constructor(private projetService:ProjetService,
    private methodisteService:MethodisteService,
    private operateurService:OperateurService,
    private validationService:ValidationService) { }

  ngOnInit(): void {
  this.projetService.countProjet().subscribe(nb => this.nbProjet=nb );
  this.methodisteService.countmethodiste().subscribe(nb => this.nbMethodiste=nb );
  this.operateurService.countoperateur().subscribe(nb => this.nbOperateur=nb );
this.validationService.countvalidation().subscribe(nb => this.nbValidation=nb);

  }

}
