import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api3Service {

  private urlAPI = 'https://localhost:7132/Compras'
  constructor(private http: HttpClient) { }
  public getData(numeroUsuario: any):Observable<any>{

    const urlConParametro = `${this.urlAPI}/${numeroUsuario}`;
    return this.http.get<any>(urlConParametro)
  }
}
