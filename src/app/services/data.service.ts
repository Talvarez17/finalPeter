import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // URL al cual accedemos
  baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  // Definición de los métodos HTTP que utilizaremos, todos reciben el modelo, acción y datos para la consulta 
  
  get(model: string, action: string) {
    return this.http.get(`${this.baseUrl}/${model}/${action}`);
  }

  getO(model: string, action: string, datos: any) {
    return this.http.get(`${this.baseUrl}/${model}/${action}/${datos}`);
  }
  
  post(model: string, action: string, datos: any) {
    return this.http.post(`${this.baseUrl}/${model}/${action}`, datos);
  }

  // put(model: string, action: string, datos: any) {
  //   return this.http.put(`${this.baseUrl}/${model}/${action}`, datos);
  // }
}
