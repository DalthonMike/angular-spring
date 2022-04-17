import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {PessoaModel} from "../model/pessoa.model";
import {PessoaService} from "../pessoa.service";
import {Utils} from "../../../util/Utils";

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  public resource: any;
  private submitted = false;

  constructor(
    private pessoaService: PessoaService,
  ) {

  }

  ngOnInit(): void {
    this.resource = new PessoaModel();

  }

  onSubmit(pessoaForm: NgForm) {
    this.submitted = true;

    if (!pessoaForm.invalid) {
        this.salvar();
    } else {
      console.log('Erro')
    }
  }

  salvar() {
    this.pessoaService.cadastro(this.resource).subscribe(() => {

        // this.menssagem.sucessoSemBtnComTimer('Pessoa cadastrada com sucesso!');
      },
      (error: { error: { message: any; }; }) => {
        error.error.message
      }
    );
  }

  public validaPreenchimento(value: any): boolean{
    return this.submitted && this.isVazio(value);
  }

  public isVazio(value: any): boolean{
    return Utils.isNullOrUndefinedOrEmpty(value);
  }

}
