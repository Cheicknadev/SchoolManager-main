import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Materiel } from '../Interface/materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielServiceService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllMaterielles():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllMaterielle`)
  }
  public createMaterielle(materiel:Materiel):Observable<any>{
      return this.http.post<Materiel>(`${this.url}/saveMaterielle`,materiel);
  }
  public updateMaterielle(materiel:Materiel):Observable<any>{
    return this.http.put<Materiel>(`${this.url}/updateMaterielle`,materiel);
  }
  public deleteMaterielleById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteMaterielleById/${id}`);
  }
  public deleteMaterielle(materiel:Materiel):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteMaterielle/${materiel}`);
  }
  public getMaterielleById(id:number):Observable<Materiel>{
    return this.http.get<Materiel>(`${this.url}/getMaterielleById/${id}`);
  }
    public getMaterielleByDesignation(designation:string):Observable<Materiel>{
    return this.http.get<Materiel>(`${this.url}/getMaterielleByDesignation/${designation}`);
  }
}

