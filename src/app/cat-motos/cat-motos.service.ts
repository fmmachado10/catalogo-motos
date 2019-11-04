import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Moto} from "../modelo/moto";
import {delay, take, tap} from 'rxjs/operators';
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

  consultar (): Observable<Moto[]> {
    return this.http.get<Moto[]>(url);
  }




}
