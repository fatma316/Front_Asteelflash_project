import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Operateur } from './operateur';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  private OperateurUrl = 'http://127.0.0.1:8000/Operateur';
  private OperateurUrl2 = 'http://127.0.0.1:8000/Operateur/';

  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  getOperateur(): Observable<Operateur[]> {
    return this.http.get<Operateur[]>(this.OperateurUrl);
  }
  updateOperateur(Operateur:Operateur):Observable<any>{
    const url=`${this.OperateurUrl }/${Operateur.Id}`
    return this.http.put(url,Operateur);
    } 
  saveOperateur(Operateur:Operateur){
      return this.http.post(this.OperateurUrl2,Operateur);
    } 
  deleteOperateur(id :number):Observable<Operateur>{
      const url=`${this.OperateurUrl}/${id}`;
      return this.http.delete<Operateur>(url,this.httpOption);
    } 
    searchOperateur(term: string): Observable<Operateur[]> {
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<Operateur[]>(`${this.OperateurUrl}/?name=${term}`);
    }     
    countoperateur():Observable<number>{
      return this.http.get<number>("http://127.0.0.1:8000/countoperator/")
      
    }

}
 