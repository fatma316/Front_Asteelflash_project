import { Component, OnInit } from '@angular/core';
import { Methodiste } from '../methodiste';
import { MethodisteService } from '../methodiste.service';

@Component({
  selector: 'app-methodiste',
  templateUrl: './methodiste.component.html',
  styleUrls: ['./methodiste.component.css']
})
export class MethodisteComponent implements OnInit {

  constructor(private methodisteService:MethodisteService) { }
methodistes:Methodiste[]=[];
email:any;
  ngOnInit(): void {
this.getMethodiste();
  }
  getMethodiste(): void {
    this.methodisteService.getMethodiste().subscribe(methodistes =>{
      this.methodistes = methodistes;
      methodistes.forEach(methodiste =>console.log(methodiste.Id))
    });}
    delete(methodiste: Methodiste): void {
      this.methodistes= this.methodistes.filter(h => h !== methodiste);
      this.methodisteService.deleteMethodiste(methodiste.Id).subscribe();
    }
     Search()
  {
    if(this.email ==""){
      this.ngOnInit();
    }
    else {
      this.methodistes=this.methodistes.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
      })
    }

  }


}
