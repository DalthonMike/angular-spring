import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  protected http: HttpClient;
  private pathBase: string = environment.apiUrl

  constructor(http: HttpClient) {
    this.http = http;
  }

  cadastro(resource: any) {
    return this.http.post<any>(`${this.pathBase}/time`, resource, {observe: 'response'});
  }

  listarTecnicos(): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/pessoa`)
  }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/time/todos`)
  }

  listarTodas(): Observable<any>{
    return this.http.get<any>(`${this.pathBase}/pessoa/time`)
  }

  exclusao(id: number) {
    return this.http.delete<any>(`${this.pathBase}/time/${id}`)
  }
}
