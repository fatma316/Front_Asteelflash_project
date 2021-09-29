import { Component, OnInit } from '@angular/core';
import { Methodiste } from '../methodiste';
import { Location } from '@angular/common';
import { MethodisteService } from '../methodiste.service';
@Component({
  selector: 'app-addmethodiste',
  templateUrl: './addmethodiste.component.html',
  styleUrls: ['./addmethodiste.component.css']
  
})
export class AddmethodisteComponent implements OnInit {
  methodiste : Methodiste = {Id:0 , email:"" , password:""}

  constructor(private methodisteService :MethodisteService, private location:Location) { }

  ngOnInit(): void {
  }
  save(){
    this.methodisteService.saveMethodiste(this.methodiste)
    .subscribe(data =>{console.log(data)},err =>{console.log(err);} )
  }
  goBack(): void {
    this.location.back();
  }

}
