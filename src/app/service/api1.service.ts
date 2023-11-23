import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  private urlAPI = 'https://localhost:7292/Cliente';

  constructor(private http: HttpClient) { }

  public getData(numeroUsuario: any): Observable<any>{

    const urlConParametro = `${this.urlAPI}/${numeroUsuario}`;
    return this.http.get<any>(urlConParametro);
  }
}
