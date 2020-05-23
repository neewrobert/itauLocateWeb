import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LatLngModel } from './model/lat-lng-model.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalizadorAgenciaService {

  constructor(
    private http: HttpClient
  ) {}
 
  getAgencias(body: LatLngModel) {  
    return this.http
          .post(`${environment.host}/addressInfo/buscaagencias`, body);
  } 

 
}
