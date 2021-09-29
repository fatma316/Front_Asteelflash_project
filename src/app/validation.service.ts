import { HttpClient, HttpHeaders , HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Validation } from './validation';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private ValidationUrl='http://127.0.0.1:8000/valide';
  private ValidationUrl3='http://127.0.0.1:8000/valide/';
private APIUrl= 'http://127.0.0.1:8000';
public FileUrl='http://127.0.0.1:8000/media/';

  httpOption= {
    headers: new HttpHeaders ({'Content-type':'application/json'})
  };
  constructor(
    private http : HttpClient

  ) { }
  
  UploadFile(val:any)
  {
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val);
  }

  getOne(id:Number): Observable<Validation> {
    const url=`${this.ValidationUrl}/${id}`;
    return this.http.get<Validation>(url);
  }
  updateValidation(Validation:Validation):Observable<any>{
    const url=`${this.ValidationUrl}/${Validation.Id_val}`
    return this.http.put(url,Validation);
  }
  saveValidation(Validation:Validation){
    return this.http.post(this.ValidationUrl3,Validation);
  }

  countvalidation():Observable<number>{
    return this.http.get<number>("http://127.0.0.1:8000/countvalidateur/")
    
  }
  getValidation(): Observable<Validation[]> {
    return this.http.get<Validation[]>(this.ValidationUrl);
  }
 
  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }
  
  getEmp():Observable<any[]>{
    return this.http.get<any[]>(this.FileUrl);
  }

}
