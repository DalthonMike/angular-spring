import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PessoaModel} from "./model/pessoa.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  protected http: HttpClient;
  private pathBase: string = environment.apiUrl

  constructor(http: HttpClient) {
    this.http = http;
  }

  getPathPageable(): string {
    return "";
  }

  cadastro(formData: PessoaModel) {
    return this.http.post<any>(`${this.pathBase}/pessoa`, formData, {observe: 'response'});
  }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.pathBase}/pessoa`)
  }

  listarTodas(): Observable<any>{
    return this.http.get<any>(`${this.pathBase}/pessoa/todas`)
  }
  exclusao(id: number) {
    return this.http.delete<any>(`${this.pathBase}/pessoa/${id}`)
  }
}
