import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Note } from '../Interface/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesServicesService {
  private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public ajouterNoteEtudiant(notes:Note):Observable<Note>{
    return this.http.post<Note>(`${this.url}/saveNotes`,notes);
  }
  public updateNoteEtudiant(notes:Note):Observable<Note>{
    return this.http.put<Note>(`${this.url}/updateNotes`,notes);
  }
}
