import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EtudiantComponent } from '../composant/etudiant/etudiant.component';
import { Etudiant } from '../Interface/etudiant';


@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public createEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(`${this.url}/saveEtudiant`,etudiant);
  }
  public updateEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.url}/updateEtudiant`,etudiant);
  }
  public getEtudiantById(id:number):Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.url}/getEtudiantById/${id}`);
  }
    public getEtudiantByNumeroMatricule(numero:String):Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.url}/getEtudiantById/${numero}`);
  }
  public getAllEtudiant():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllEtudiant`)
  }
  public getAllNotesEtudiant(etudiant:Etudiant):Observable<any>{
    return this.http.get<any>(`${this.url}/getAllNotesEtudiants/${etudiant}`);
  }
  public getAllEtudiantByLibelleClasse(libelle:string):Observable<any>{
    return this.http.get<any>(`${this.url}/getAllEtudiantByLibelleClasse/${libelle}`);
  }
}
