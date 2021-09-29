import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditvalidatorService } from '../editvalidator.service';
import { Validateur } from '../validateur';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editvalidator',
  templateUrl: './editvalidator.component.html',
  styleUrls: ['./editvalidator.component.css']
})
export class EditvalidatorComponent implements OnInit {
  validateur :Validateur ={ Id:0,
    email:"" , 
    password:"",
    Department:""}
  constructor(private route :ActivatedRoute,
     private editvalidatorService : EditvalidatorService,
    private location:Location) { }

    ngOnInit(): void {
      this.getValidateur();
    }
    getValidateur():void{
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.editvalidatorService.getOne(id).subscribe(validateur=> this.validateur = validateur);
    }
    goBack(): void {
      this.location.back();
    }
    save():void {
      this.editvalidatorService.updateValidateur(this.validateur).subscribe(()=>this.goBack());
      let aler= alert("added successfully");

    }

}
