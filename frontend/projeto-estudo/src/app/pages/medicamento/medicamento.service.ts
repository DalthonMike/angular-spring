import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PessoaModel } from '../../../model/pessoa.model';
import { MedicamentoModel } from 'src/model/medicamento.model';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  protected http: HttpClient;
  private pathBase: string = environment.apiUrl;

  constructor(http: HttpClient) {
    this.http = http;
  }
  cadastro(formData: MedicamentoModel) {
    return this.http.post<any>(`${this.pathBase}/medicamento`, formData, {
      observe: 'response',
    });
  }
}
