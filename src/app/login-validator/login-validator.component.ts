import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validateur } from '../validateur';
import { ValidateurService } from '../validateur.service';

@Component({
  selector: 'app-login-validator',
  templateUrl: './login-validator.component.html',
  styleUrls: ['./login-validator.component.css']
})
export class LoginValidatorComponent implements OnInit {
validateur:Validateur={ "Id":0, "email":"" , "password":"","Department":""}
msgErreur:String=""
 
constructor(private validateurService:ValidateurService,
  private router: Router) { }

  ngOnInit(): void {
    this.getValidateurs();

  }
  login(){
    this.validateurService.getValidateur().subscribe(validateurs =>validateurs.forEach(
      adm => {
        if (adm.email==this.validateur.email && adm.password==this.validateur.password){
          this.router.navigateByUrl("/dashboard_validator")}
        else this.msgErreur="connexion failed  check your username or password" }))
  }
  getValidateurs(){
    this.validateurService.getValidateur().subscribe(adm => adm.forEach(a => console.log(a.email,a.password)))
  }

}
