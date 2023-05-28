import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../Interface/note';
import { Enseignant } from '../Interface/enseignant';
@Injectable({
  providedIn: 'root'
})
export class EnseignantServiceService {
  private urlApi = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllListeEtudiantByClasse(classe:string):Observable<any>{
    return this.http.get<any>(`${this.urlApi}/{classe}`);
  }
  public createNotes(notes:Note):Observable<Note>{
    return this.http.post<Note>(`${this.urlApi}/saveNotes`,notes);
  }
  public updateEnseignant(enseignant:Enseignant):Observable<Enseignant>{
    return this.http.put<Enseignant>(`${this.urlApi}/updateEnseignat`,enseignant);
    }
  public getEnseignantById(id:number):Observable<Enseignant>{
    return this.http.get<Enseignant>(`${this.urlApi}/getEnseignantById/${id}`);
  }
  public deleteEnseignantById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlApi}/deleteEnseignantById/${id}`);
  }
  public deleteEnseignant(enseignant:Enseignant):Observable<void>{
    return this.http.delete<void>(`${this.urlApi}/deleteEnseignant/${enseignant}`);
  }
  private listeClasseByLibelle(libelle:string):Observable<any>{
    return this.http.get<any>(`${this.urlApi}/${libelle}`);
  }
}
