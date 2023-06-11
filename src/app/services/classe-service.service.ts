import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classe } from '../Interface/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllClasse():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllClasse`);
  }
  public createClasse(classe:Classe):Observable<Classe>{
    return this.http.post<Classe>(`${this.url}/saveClasse`,classe);
  }
  public updateClasse(classe:Classe):Observable<Classe>{
    return this.http.put<Classe>(`${this.url}/updateClasse`,classe);
  }
  public getClasseByLibelle(libelle:string):Observable<Classe>{
    return this.http.get<Classe>(`${this.url}/getClasseByLibelle/${libelle}`);
  }
  public deleteClasseById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteClasseById/${id}`);
  }
  public deleteClasse(classe:Classe):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteClasse/${classe}`);
  }
  public getListeEtudiantByClasse(classe:Classe):Observable<Classe>{
    return this.http.get<any>(`${this.url}/getAllEtudiantByClasse/${classe}`);
  }
  public getAllEtudiantByLibelleClasse(libelle:string):Observable<any>{
    return this.http.get<any>(`${this.url}/getAllEtudiantByLibelleClasse/${libelle}`);
  }
  public getAllEtudiantClassebyAbrege(abrege:string):Observable<any>{
    return this.http.get<any>(`${this.url}/getAllEtudiantClasseByAbrege/${abrege}`);
  }
}
