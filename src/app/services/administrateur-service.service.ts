import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Administration } from '../Interface/administration';
import { Administrateur } from '../Interface/administrateur';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurServiceService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllAdministration():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllAdministration`);
  }
  public createAdministration(administration:Administration):Observable <Administration>{
    return this.http.post<Administration>(`${this.url}/saveAdministration`,administration);
  }
  public updateAdministration(administration:Administration):Observable<Administration>{
    return this.http.put<Administration>(`${this.url}/updateAdministration`,administration);
  }
  public deleteAdministration(administration:Administration):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteAdministration/${administration}`);
  }
  public deleteAdministrationById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteAdministrationById/${id}`);
  }

}
