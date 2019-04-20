import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from "rxjs";

// variables de configuración
import { environment } from '../environments/environment';


const headers = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    public urlApi = environment.urlApi;
  
    constructor(private http: HttpClient) {
  
    }
  
    /**
     * Consultar todas las películas
     * @param path 
     */
    getMovies(path: string): Observable<any> {
      return this.http.get(this.urlApi + path, {headers: headers});
    }
  
    /**
     * Consultar una sola película
     * @param path 
     * @param pelicula 
     */
    getMovie(path: string, pelicula: any | string): Observable<any> {
      const id = typeof pelicula === 'string' ? pelicula : pelicula.id;
      return this.http.get<any>(this.urlApi + path + id, {headers: headers});
    }
    
    getMovies2(path: string){
      return fetch(this.urlApi+'s='+ path).then(Response=>Response.json());
    }
    getMovies3(path: string){
      return fetch(this.urlApi+'i='+ path).then(Response=>Response.json());
    }
  
}
