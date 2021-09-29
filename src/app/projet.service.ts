import { Injectable } from '@angular/core';
import { Projet } from './projet';
import { Observable,of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private ProjetUrl = 'http://127.0.0.1:8000/project';
  private ProjectUrl2='http://127.0.0.1:8000/project/';
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  getProjet(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.ProjetUrl);
  }
   
  getOne(id:Number): Observable<Projet> {
    const url=`${this.ProjetUrl}/${id}`;
    return this.http.get<Projet>(url);

  }
  updateProjet(Projet:Projet):Observable<any>{
    const url=`${this.ProjetUrl}/${Projet.projectId}`
    return this.http.put(url,Projet);
  }
  saveProjet(Projet:Projet){
    return this.http.post(this.ProjectUrl2,Projet);
  }
  deleteProjet(id :number):Observable<Projet>{
    const url=`${this.ProjetUrl}/${id}`;
    return this.http.delete<Projet>(url,this.httpOption);
  }
  searchProjet(term: string): Observable<Projet[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Projet[]>(`${this.ProjetUrl}/?name=${term}`);
  }
 countProjet():Observable<number>{
    return this.http.get<number>("http://127.0.0.1:8000/countprojet/")
    
  }

}
