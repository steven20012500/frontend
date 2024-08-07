import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://ec2-44-211-156-254.compute-1.amazonaws.com:3000/api-menu/agregarEmpleado'; // URL al archivo JSON
  private apiUrl2 = 'http://ec2-44-211-156-254.compute-1.amazonaws.com:3000/api-menu/obtenerEmpleados'; // URL al archivo JSON
  private apiUrl3 = 'http://ec2-44-211-156-254.compute-1.amazonaws.com:3000/api-menu/eliminarEmpleado'; // URL al archivo JSON
  
  constructor(private http: HttpClient) { }
  
  agregarEmpleado(datos: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, datos);
  }
  obtenerEmpleados(): Observable<any> {
    return this.http.get<any>(this.apiUrl2);
  }
  deleteEmpleado(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl3}/${id}`);
  }

}
