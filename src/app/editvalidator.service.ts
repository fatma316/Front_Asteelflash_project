import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Validateur } from './validateur';

@Injectable({
  providedIn: 'root'
})
export class EditvalidatorService {
  private EditvalidatorUrl='http://127.0.0.1:8000/Productiondetail'
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(private http : HttpClient) { }
  getValidateur(): Observable<Validateur[]> {
    return this.http.get<Validateur[]>(this.EditvalidatorUrl);
  }
  getOne(id:Number): Observable<Validateur> {
    const url=`${this.EditvalidatorUrl}/${id}`;
    return this.http.get<Validateur>(url);
  }
  updateValidateur(Validateur:Validateur):Observable<any>{
    const url=`${this.EditvalidatorUrl}/${Validateur.Id}`
    return this.http.put(url,Validateur);
  }
}

