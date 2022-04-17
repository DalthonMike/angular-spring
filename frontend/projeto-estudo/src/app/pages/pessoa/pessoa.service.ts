import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

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

  cadastro(formData: FormData) {
    return this.http.post<any>(`${this.pathBase}/pessoa`, formData, {observe: 'response'});
  }
}
