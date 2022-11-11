import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PessoaService} from "../pessoa.service";
import {Menssagens} from "../../../menssagem/menssagens";
import {Router} from "@angular/router";
import {Utils} from "../../../util/Utils";
import {PessoaModel} from "../model/pessoa.model";
import {Perfil} from "../../../interfaces/Perfil";

@Component({
  selector: 'app-pessoa-edita',
  templateUrl: './pessoa-edita.component.html',
  styleUrls: ['./pessoa-edita.component.css']
})
export class PessoaEditaComponent implements OnInit {

  resource: any;
  opcoesTipoPessoa: Perfil[];
  private submitted = false;

  constructor(
    private pessoaService: PessoaService,
    private menssagem: Menssagens,
    public router: Router
  ) {

    this.opcoesTipoPessoa = [
      {name: 'Técnico', descricao: 'TECNICO'},
      {name: 'Comum', descricao: 'COMUM'}
    ]

    /**
     * Recuperar os paramentros passados da tela anterior.
     */
    this.resource = this.router.getCurrentNavigation()?.extras.state?.['dados'];
  }

  ngOnInit(): void {
    if (this.isVazio(this.resource)) {
      this.voltar();
    }
  }

  onSubmit(pessoaForm: NgForm) {
    this.submitted = true;

    if (!pessoaForm.invalid) {
      this.editar();
    } else {
      console.log(pessoaForm.value)
    }
  }

  editar() {
    this.pessoaService.editar(this.resource).subscribe({
      next: () => {
        this.menssagem.sucesso('Pessoa editada com sucesso')
        this.voltar()
      }
      ,
      error: error => {
        this.menssagem.erroComum('Erro', error.error.message)
      }
    });
  }

  public validaPreenchimento(value: any): boolean {
    return this.submitted && this.isVazio(value);
  }

  public isVazio(value: any): boolean {
    return Utils.isNullOrUndefinedOrEmpty(value);
  }

  voltar() {
    this.router.navigate([''])
  }

}
