import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Validateur } from './validateur';

@Injectable({
  providedIn: 'root'
})
export class ValidateurService {
  private ValidateurUrl = 'http://127.0.0.1:8000/Production';
  private ValidateurUrl2 = 'http://127.0.0.1:8000/Production/';

  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(private http : HttpClient) { }

  getValidateur(): Observable<Validateur[]> {
    return this.http.get<Validateur[]>(this.ValidateurUrl);
  }
  updateOperateur(Validateur:Validateur):Observable<any>{
    const url=`${this.ValidateurUrl }/${Validateur.Id}`
    return this.http.put(url,Validateur);
    } 
    saveOperateur(Validateur:Validateur){
      return this.http.post(this.ValidateurUrl2,Validateur);
    }  
    countvalidation():Observable<number>{
      return this.http.get<number>("http://127.0.0.1:8000/countvalidateur/")
      
    }
    deleteOperateur(id :number):Observable<Validateur>{
      const url=`${this.ValidateurUrl}/${id}`;
      return this.http.delete<Validateur>(url,this.httpOption);
    }  
    searchOperateur(term: string): Observable<Validateur[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Validateur[]>(`${this.ValidateurUrl}/?name=${term}`);
    }       
}
