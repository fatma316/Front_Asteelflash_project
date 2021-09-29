import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Methodiste } from './methodiste';

@Injectable({
  providedIn: 'root'
})
export class EditmethodisteService {
  private MethodistedetailUrl='http://127.0.0.1:8000/methodistedetail'
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  getOne(id:Number): Observable<Methodiste> {
    const url=`${this.MethodistedetailUrl}/${id}`;
    return this.http.get<Methodiste>(url);
  }
  updateMethodiste(Methodiste:Methodiste):Observable<any>{
    const url=`${this.MethodistedetailUrl}/${Methodiste.Id}`
    return this.http.put(url,Methodiste);
  }
}
