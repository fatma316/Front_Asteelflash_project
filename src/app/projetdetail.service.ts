import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Projet } from './projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetdetailService {
  private ProjetdetailUrl='http://127.0.0.1:8000/projectdetail'
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  getOne(id:Number): Observable<Projet> {
    const url=`${this.ProjetdetailUrl}/${id}`;
    return this.http.get<Projet>(url);
  }
  updateProjet(Projet:Projet):Observable<any>{
    const url=`${this.ProjetdetailUrl}/${Projet.projectId}`
    return this.http.put(url,Projet);
  }
}
