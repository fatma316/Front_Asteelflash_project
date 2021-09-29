import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Methodiste } from '../methodiste';
import { Location } from '@angular/common';
import { EditmethodisteService } from '../editmethodiste.service';
@Component({
  selector: 'app-editmethodiste',
  templateUrl: './editmethodiste.component.html',
  styleUrls: ['./editmethodiste.component.css']
})
export class EditmethodisteComponent implements OnInit {
methodiste:Methodiste ={Id:0,email:"",password:""}
  constructor(private route :ActivatedRoute,private methodistedetailService:EditmethodisteService,
    private location:Location ) { }

    ngOnInit(): void {
      this.getmethodiste();
    }
    getmethodiste():void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.methodistedetailService.getOne(id).subscribe(methodiste=> this.methodiste = methodiste);
    }
    goBack(): void {
      this.location.back();
    }
    save():void {
      this.methodistedetailService.updateMethodiste(this.methodiste).subscribe(()=>this.goBack());
      let aler= alert("added successfully");

    }

}
