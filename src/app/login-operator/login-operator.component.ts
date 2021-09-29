import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operateur } from '../operateur';
import { OperateurService } from '../operateur.service';

@Component({
  selector: 'app-login-operator',
  templateUrl: './login-operator.component.html',
  styleUrls: ['./login-operator.component.css']
})
export class LoginOperatorComponent implements OnInit {
operateur:Operateur={"Id":0,"Matricule":"","password":""}
msgErreur:String=""

  constructor(private operateurService:OperateurService,
    private router :Router) { }

  ngOnInit(): void {
this.getOperateurs();
  }
  login(){
    this.operateurService.getOperateur().subscribe(operateurs =>operateurs.forEach(
      adm => {
        if (adm.Matricule==this.operateur.Matricule && adm.password==this.operateur.password){
          this.router.navigateByUrl("/dashboard_operator")}
        else this.msgErreur="connexion failed  check your username or password" }))
  }
  getOperateurs(){
    this.operateurService.getOperateur().subscribe(adm => adm.forEach(a => console.log(a.Matricule,a.password)))
  }


}
