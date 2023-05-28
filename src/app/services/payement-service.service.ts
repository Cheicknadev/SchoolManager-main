import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayementServiceService {
 private url = environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAllPayementScolaire():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllPayementScolaire`);
  }
}
