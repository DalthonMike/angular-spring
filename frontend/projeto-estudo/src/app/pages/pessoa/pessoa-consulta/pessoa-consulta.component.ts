import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { PessoaResponseModel } from '../../../../model/pessoa-response.model';
import { Menssagens } from '../../../menssagem/menssagens';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-consulta',
  templateUrl: './pessoa-consulta.component.html',
  styleUrls: ['./pessoa-consulta.component.css'],
})
export class PessoaConsultaComponent implements OnInit {
  pessoas: PessoaResponseModel[] = [];
  checkTodas: boolean = false;

  constructor(
    private pessoaService: PessoaService,
    private mensagens: Menssagens,
    public router: Router
  ) {}

  ngOnInit() {
    this.listaPadrao();
  }

  checkBoxChange(check: boolean) {
    if (check) {
      this.listarTodas();
    } else {
      this.listaPadrao();
    }
  }

  listarTodas() {
    this.pessoaService.listarTodas().subscribe((response) => {
      this.pessoas = response;
    });
  }

  listaPadrao() {
    this.pessoaService.listar().subscribe((response) => {
      this.pessoas = response;
    });
  }

  editar(pessoa: any) {
    const dadosEdicao = {
      id: pessoa.id,
      nome: pessoa.nome,
      email: pessoa.email,
    };
    this.router.navigate(['/pessoa-edita'], {
      state: { dados: dadosEdicao },
    });
  }

  excluir(id: number) {
    this.mensagens
      .erroComOpcaoSimNao('Exclusão', 'Deseja realmente excluir essa pessoa?')
      .then((response) => {
        if (response.value) {
          this.confirmaRemocao(id);
        }
      });
  }

  confirmaRemocao(id: number) {
    this.pessoaService.exclusao(id).subscribe(
      (response) => {
        this.mensagens.sucesso('Pessoa excluida com sucesso');
        this.ngOnInit();
      },
      (error) => {
        this.mensagens.erroComum('Erro', error.error.details);
      }
    );
  }
}
