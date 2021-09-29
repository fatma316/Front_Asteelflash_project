import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Validation } from './validation';

@Injectable({
  providedIn: 'root'
})
export class ValidataiondetailService {
  private ValidationdetailUrl = 'http://127.0.0.1:8000/validedetail';
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };

  constructor(
    private http : HttpClient

  ) { }
  getOne(id:Number): Observable<Validation> {
    const url=`${this.ValidationdetailUrl}/${id}`;
    return this.http.get<Validation>(url);
  }
  updateValidation(Validation:Validation):Observable<any>{
    const url=`${this.ValidationdetailUrl}/${Validation.Id_val}`
    return this.http.put(url,Validation);
  }
  getValidation(): Observable<Validation[]> {
    return this.http.get<Validation[]>(this.ValidationdetailUrl);
  }
}
