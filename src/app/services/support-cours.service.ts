import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SupportCours } from '../Interface/support-cours';

@Injectable({
  providedIn: 'root'
})
export class SupportCoursService {
  private urlApi = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllSupportCours():Observable<any>{
    return this.http.get<any>(`${this.urlApi}`);
  }
  public createSupportCours(supportCours:SupportCours):Observable<SupportCours>{
    return this.http.post<SupportCours>(`${this.urlApi}`,supportCours);
  }
  public updateSupportCours(supportCours:SupportCours):Observable<SupportCours>{
    return this.http.put<SupportCours>(`${this.urlApi}`,supportCours);
  }
  public getSupportCoursById(id:number):Observable<SupportCours>{
    return this.http.get<SupportCours>(`${this.urlApi}`)
  }
  public deleteSupportCours(supportCours:SupportCours):Observable<void>{
    return  this.http.delete<void>(`${this.urlApi}`);
  }
  public deleteSupportCoursById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlApi}`);
  }
}
