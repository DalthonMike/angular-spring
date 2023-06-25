import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PessoaModel } from '../../../../model/pessoa.model';
import { PessoaService } from '../pessoa.service';
import { Utils } from '../../../util/Utils';
import { Menssagens } from '../../../menssagem/menssagens';
import { Router } from '@angular/router';
import { Perfil } from '../../../interfaces/Perfil';

@Component({
  selector: 'app-pessoa-cadastro',

  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css'],
})
export class PessoaCadastroComponent implements OnInit {
  public resource: any;
  private submitted = false;

  perfis: Perfil[];

  constructor(
    public router: Router,
    private pessoaService: PessoaService,
    private menssagem: Menssagens
  ) {
    this.perfis = [
      { name: 'Comum', descricao: 'COMUM' },
      { name: 'Técnico', descricao: 'TECNICO' },
    ];
  }

  ngOnInit(): void {
    this.resource = new PessoaModel();
  }

  onSubmit(pessoaForm: NgForm) {
    this.submitted = true;

    if (!pessoaForm.invalid) {
      if (!this.isVazio(this.resource.perfil)) {
        this.salvar();
      }
    } else {
      console.log(pessoaForm.value);
    }
  }

  salvar() {
    this.pessoaService.cadastro(this.resource).subscribe({
      next: () => {
        this.menssagem.sucesso('Pessoa cadastrada com sucesso');
        this.voltar();
      },
      error: (error) => {
        this.menssagem.erroComum('Erro', error.error.message);
      },
    });
  }

  public validaPreenchimento(value: any): boolean {
    return this.submitted && this.isVazio(value);
  }

  public isVazio(value: any): boolean {
    return Utils.isNullOrUndefinedOrEmpty(value);
  }

  voltar() {
    this.router.navigate(['']);
  }
}
