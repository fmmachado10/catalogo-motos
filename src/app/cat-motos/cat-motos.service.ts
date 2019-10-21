import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Moto} from "../modelo/moto";
import {delay, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatMotosService {

  private readonly URL = 'http://localhost:8080'

  constructor(private http: HttpClient) {
  }

  save(moto: Moto) {
    return !moto.id ?

      this.http.post(this.URL + '/adicionar', JSON.stringify(moto))
        .subscribe(dados => console.log(dados)):

      this.http.put(this.URL + '/adicionar', JSON.stringify(moto))
        .subscribe(dados => console.log(dados));
  }

  remove(id) {
    return this.http.delete(`${this.URL}/${id}`).pipe(take(1));
  }

  private update(moto) {
    return this.http.put(`${this.URL}/${moto.id}`, moto).pipe(take(1));
  }

  listar() {
    return this.http.get<Moto[]>(this.URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<Moto>(`${this.URL}/${id}`).pipe(take(1));
  }





}
