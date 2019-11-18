import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Moto} from "../modelo/moto";
import {Observable} from "rxjs/internal/Observable";

const url = 'http://localhost:8080/motos';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CatMotosService {

  constructor(private http: HttpClient) {
  }

  consultar(): Observable<Moto[]> {
    console.log("...service consultar...")
    return this.http.get<Moto[]>(url);

  }

  consultarPorId(id: number): Observable<Moto> {
    const urlLocal = `${url}/${id}`;
    return this.http.get<Moto>(urlLocal);
  }

  adicionar(Moto): Observable<Moto> {
    console.log("...service adicionar...")
    return this.http.post<Moto>(url, Moto, httpOptions);
  }

  alterar(id, Moto): Observable<any> {
    console.log("...service alterar...")
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal, Moto, httpOptions);
  }

  excluir(id): Observable<Moto> {
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Moto>(urlLocal, httpOptions);
  }





}
