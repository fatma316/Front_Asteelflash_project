import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operateur } from '../operateur';
import { OperateurService } from '../operateur.service';
@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.css']
})
export class OperateurComponent implements OnInit {
  http: any;
  Matricule:any;

  constructor(private operateurService :OperateurService 
    ) { }
operateurs:Operateur[]=[];

  ngOnInit(): void {
    this.getOperateur();
  }
getOperateur():void{
  this.operateurService.getOperateur().subscribe(operateurs =>{
    this.operateurs = operateurs;
    operateurs.forEach(operateur =>console.log(operateur.Id))
  });

}
delete(operateur: Operateur): void {
  this.operateurs= this.operateurs.filter(h => h !== operateur);
  this.operateurService.deleteOperateur(operateur.Id).subscribe();
}
Search()
{
  if(this.Matricule ==""){
    this.ngOnInit();
  }
  else {
    this.operateurs=this.operateurs.filter(res=>{
      return res.Matricule.toLocaleLowerCase().match(this.Matricule.toLocaleLowerCase());
    })
  }
}

}
