import { HttpClient ,HttpHeaders,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from './projet';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {
  private ProjetUrl = 'http://127.0.0.1:8000/project/';
  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };

  constructor(private http: HttpClient) { }
  getProjet(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.ProjetUrl);
  }

}
