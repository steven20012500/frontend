import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/api-menu/agregarEmpleado'; // URL al archivo JSON

  
  constructor(private http: HttpClient) { }
  
  agregarEmpleado(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }

}
