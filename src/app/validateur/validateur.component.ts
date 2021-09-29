import { Component, OnInit } from '@angular/core';
import { Validateur } from '../validateur';
import { ValidateurService } from '../validateur.service';

@Component({
  selector: 'app-validateur',
  templateUrl: './validateur.component.html',
  styleUrls: ['./validateur.component.css']
})
export class ValidateurComponent implements OnInit {

  constructor(private validateurService: ValidateurService) { }
validateurs:Validateur[]=[];
Department:any;
  ngOnInit(): void {
    this.getValidateur();
  }
  getValidateur():void{
    this.validateurService.getValidateur().subscribe(validateurs =>{
      this.validateurs =validateurs;
      validateurs.forEach(validateur =>console.log(validateur.Id))
    });
  }
    delete(validateur: Validateur): void {
      let conf = confirm("Are You Sure ?");
      if (conf)
      this.validateurs= this.validateurs.filter(h => h !== validateur);
      this.validateurService.deleteOperateur(validateur.Id).subscribe();
    }  

    Search()
    {
      if(this.Department ==""){
        this.ngOnInit();
      }
      else {
        this.validateurs=this.validateurs.filter(res=>{
          return res.Department.toLocaleLowerCase().match(this.Department.toLocaleLowerCase());
        })
      }
    }
}
