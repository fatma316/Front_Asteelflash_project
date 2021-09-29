import { ValidationTableauComponent } from './../validation-tableau/validation-tableau.component';
import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { Validation } from '../validation';

@Component({
  selector: 'app-update-etat',
  templateUrl: './update-etat.component.html',
  styleUrls: ['./update-etat.component.css']
})
export class UpdateEtatComponent implements OnInit {
  validation: Validation[]=[]
  constructor(private validationService:ValidationService) { }

  ngOnInit(): void {
  }
  save():void {

  }

}
