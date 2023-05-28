import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Absence } from '../Interface/absence';
import { Etudiant } from '../Interface/etudiant';
import { Enseignant } from '../Interface/enseignant';
import { Administration } from '../Interface/administration';

@Injectable({
  providedIn: 'root'
})
export class AbsenceServiceService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public createAbsence(absence:Absence):Observable<Absence>{
    return this.http.post<Absence>(`${this.url}/saveAbsences`,absence);
  }
  public updateAbsence(absence:Absence):Observable<Absence>{
    return this.http.put<Absence>(`${this.url}/updateAbsences`,absence);
  }
  public getAllAbsenceById(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`);
  }
  public deleteAbsence(absence:Absence):Observable<void>{
    return this.http.delete<void>(`${this.url}/deleteAbsences/${absence}`);
  }
  public deleteAbsenceById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/deletAbsenceById/${id}`);
  }
  public getEtudiantAbsences(etudiant:Etudiant):Observable<any>{
    return this.http.get<any>(`${this.url}/getAbsencesEtudiant/${etudiant}`);
  }
  public getEnseignantAbsences(enseignant:Enseignant):Observable<any>{
    return this.http.get<any>(`${this.url}/getAbsencesEnseignant/${enseignant}`);
  }
  public getAdministrationAbsence(administration:Administration):Observable<any>{
    return this.http.get<any>(`${this.url}/getAbsencesAdministration/${administration}`);
  }
}
