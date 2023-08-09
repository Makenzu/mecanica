import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
//import { map } from 'rxjs/operators';
import { Tecnico } from '../models/tecnico';
import { apiTecnicos } from 'src/environments/environment';
import { ContTypeApp } from 'src/environments/contentType';


@Injectable({
  providedIn: 'root'
})
export class TecnicosService {
  private header: HttpHeaders = new HttpHeaders(ContTypeApp.json);
  private baseEndpoint = apiTecnicos.apiRoot;

  constructor(private http: HttpClient) { }

  public listar(): Observable<Tecnico[]>{
    return this.http.get<Tecnico[]>(this.baseEndpoint);
    //return this.http.get(this.baseEndpoint).pipe(
    //  map(tecnicos => tecnicos as Tecnico[])
    //);
  }

  public listarPaginas(page: string, size: string): Observable<any>{
    const params = new HttpParams()
                                .set('page', page)
                                .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, {params: params});
  }

  public ver(id: number): Observable<Tecnico>{
    return this.http.get<Tecnico>(`${this.baseEndpoint}/${id}`);
    //return this.http.get<Tecnico>(this.baseEndpoint + '/' + id);
  }

  public crear(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.post<Tecnico>(this.baseEndpoint, tecnico, { headers: this.header});
  }

  public editar(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.put<Tecnico>(`${this.baseEndpoint}/${tecnico.id}`, tecnico, { headers: this.header});
  }
  
  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}
