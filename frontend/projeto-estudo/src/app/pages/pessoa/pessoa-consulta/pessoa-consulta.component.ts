import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../pessoa.service";
import {PessoaResponseModel} from "../model/pessoa-response.model";
import {Menssagens} from "../../../menssagem/menssagens";

@Component({
  selector: 'app-pessoa-consulta',
  templateUrl: './pessoa-consulta.component.html',
  styleUrls: ['./pessoa-consulta.component.css']
})
export class PessoaConsultaComponent implements OnInit {

  products: string[] = [];
  pessoas: PessoaResponseModel[] = []


  constructor(
    private pessoaService: PessoaService,
    private mensagens: Menssagens
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

  excluir(id: number) {
    this.mensagens.erroComOpcaoSimNao('Exclusão', 'Deseja realmente excluir essa pessoa?')
      .then(response => {
        if (response.value) {
          this.confirmaRemocao(id);
        }
      })
  }

  confirmaRemocao(id: number) {
    this.pessoaService.exclusao(id)
      .subscribe(response => {
        this.mensagens.sucesso('Pessoa excluida com sucesso')
        this.ngOnInit();
      }, error => {
        this.mensagens.erroComum('Erro', error.error.details)
      });
  }

}
