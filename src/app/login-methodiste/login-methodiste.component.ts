import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Methodiste } from '../methodiste';
import { MethodisteService } from '../methodiste.service';

@Component({
  selector: 'app-login-methodiste',
  templateUrl: './login-methodiste.component.html',
  styleUrls: ['./login-methodiste.component.css']
})
export class LoginMethodisteComponent implements OnInit {
  methodiste:Methodiste={"Id":0,"email":"","password":""};
methodistes:Methodiste[]=[]
msgErreur:String=""
  constructor(private methodisteService:MethodisteService,
    private router :Router) { }

  ngOnInit(): void {
    this.getMethodistes();
  }
  login(){
    this.methodisteService.getMethodiste().subscribe(methodistes =>methodistes.forEach(
      adm => {
        if (adm.email==this.methodiste.email && adm.password==this.methodiste.password){
          this.router.navigateByUrl("/dashboard_metho")}
        else this.msgErreur="connexion failed  check your username or password" }))
  }
  getMethodistes(){
    this.methodisteService.getMethodiste().subscribe(adm => adm.forEach(a => console.log(a.email,a.password)))
  }

}
