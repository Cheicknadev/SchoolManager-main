import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../Interface/users';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServicesService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getUsersTypeByEmailAndPassword(email:string,password:string){
    return this.http.get<any>(`${this.url}/getUsersByTypeUsers?email=${email}&password=${password}`);
  }
  public getUsersByEmail(email:string):Observable<Users>{
    return this.http.get<Users>(`${this.url}/getUsersByEmail/${email}`);
  }
  public getUsersById(id:number):Observable<Users>{
    return this.http.get<Users>(`${this.url}/getUsersById/${id}`);
  }
}
