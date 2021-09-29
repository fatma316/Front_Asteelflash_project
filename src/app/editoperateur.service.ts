import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operateur } from './operateur';

@Injectable({
  providedIn: 'root'
})
export class EditoperateurService {
  

  private OperateurdetailUrl='http://127.0.0.1:8000/Operateurdetail'
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  getOperateur(): Observable<Operateur[]> {
    return this.http.get<Operateur[]>(this.OperateurdetailUrl);
  }
  getOne(id:Number): Observable<Operateur> {
    const url=`${this.OperateurdetailUrl}/${id}`;
    return this.http.get<Operateur>(url);
  }
  updateOperateur(Operateur:Operateur):Observable<any>{
    const url=`${this.OperateurdetailUrl}/${Operateur.Id}`
    return this.http.put(url,Operateur);
  }
}
