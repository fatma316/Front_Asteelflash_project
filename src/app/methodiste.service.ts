import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import { Methodiste } from './methodiste';
@Injectable({
  providedIn: 'root'
})
export class MethodisteService {

  private MethodisteUrl = 'http://127.0.0.1:8000/methodiste';
  private MethodisteUrl2 = 'http://127.0.0.1:8000/methodiste/';

  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  getMethodiste(): Observable<Methodiste[]> {
    return this.http.get<Methodiste[]>(this.MethodisteUrl);
  }
 /* getOne(id:Number): Observable<Methodiste> {
    const url=`${this.MethodisteUrl }/${id}`;
    return this.http.get<Methodiste>(url);
  }*/
  updateMethodiste(Methodiste:Methodiste):Observable<any>{
    const url=`${this.MethodisteUrl }/${Methodiste.Id}`
    return this.http.put(url,Methodiste);
    }  


  saveMethodiste(Methodiste:Methodiste){
    return this.http.post(this.MethodisteUrl2,Methodiste);
  }
  deleteMethodiste(id :number):Observable<Methodiste>{
    const url=`${this.MethodisteUrl}/${id}`;
    return this.http.delete<Methodiste>(url,this.httpOption);
  }
  searchMethodiste(term: string): Observable<Methodiste[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Methodiste[]>(`${this.MethodisteUrl}/?name=${term}`);
  }
  countmethodiste():Observable<number>{
    return this.http.get<number>("http://127.0.0.1:8000/countmethodiste/")
    
  }
  
}