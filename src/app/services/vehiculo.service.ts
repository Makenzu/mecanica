import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContTypeApp } from 'src/environments/contentType';
import { apiVehiculos } from 'src/environments/environment';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private header: HttpHeaders = new HttpHeaders(ContTypeApp.json);
  private baseEndpoint = apiVehiculos.apiRoot;

  constructor(private http: HttpClient) { }

  public listar(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.baseEndpoint);
    // return this.http.get(this.baseEndpoint).pipe(
    //   map(vehiculos => {
    //     return vehiculos as Vehiculo[];
    //   })
    // )
  }

  public listarPaginas(page: string, size: string): Observable<any>{
    const params = new HttpParams()
                                    .set('page', page)
                                    .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`,{params: params})
  }

  public ver(id: number): Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`${this.baseEndpoint}/${id}`);
    //return this.http.get<Vehiculo>(this.baseEndpoint + '/' + id);
  }

  public crear(vehiculo: Vehiculo): Observable<Vehiculo>{
    return this.http.post<Vehiculo>(
                                    this.baseEndpoint, 
                                    vehiculo,
                                    { headers: this.header});
  }

  public editar(vehiculo: Vehiculo): Observable<Vehiculo>{
    return this.http.put<Vehiculo>(
                                    `${this.baseEndpoint}/${vehiculo.id}`, 
                                    vehiculo,
                                    { headers: this.header});
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }





}
