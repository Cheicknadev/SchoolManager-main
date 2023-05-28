import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmploieDuTemps } from '../Interface/emploie-du-temps';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploieDuTempsServiceService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public createEmploiDuTemps(emploiDuTemps:EmploieDuTemps):Observable<EmploieDuTemps>{
    return this.http.post<EmploieDuTemps>(`${this.url}/saveEmploiDuTemps`,emploiDuTemps);
  }
  public updateEmploiDuTemps(emploiDuTemps:EmploieDuTemps):Observable<EmploieDuTemps>{
    return this.http.put<EmploieDuTemps>(`${this.url}/updateEmploiDuTemps`,emploiDuTemps);
  }
  public deleteEmploiDuTempsById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteEmploiDuTempsById/${id}`);
  }
  public deleteEmploiDuTemps(emploiDuTemps:EmploieDuTemps):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteEmploiDuTemps/${emploiDuTemps}`);
  }
  public getAllEmploiDuTemps():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllEmploiDuTemps`);
  }
}
