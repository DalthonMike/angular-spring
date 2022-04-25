import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {PessoaResponseModel} from "../model/pessoa-response.model";

@Component({
  selector: 'app-pessoa-consulta',
  templateUrl: './pessoa-consulta.component.html',
  styleUrls: ['./pessoa-consulta.component.css']
})
export class PessoaConsultaComponent implements OnInit {

  products: string[] = [];
  pessoas: PessoaResponseModel[] = []


  constructor(
    private pessoaService: PessoaService
  ) {

  }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.pessoaService.listar().subscribe(response => {
      this.pessoas = response;
    })
  }


}
