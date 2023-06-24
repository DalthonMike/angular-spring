import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Menssagens} from "../../../menssagem/menssagens";
import {TimeService} from "../time.service";
import {Utils} from "../../../util/Utils";
import {TimeModel} from "../model/time.model";

@Component({
  selector: 'app-time-cadastro',
  templateUrl: './time-cadastro.component.html',
  styleUrls: ['./time-cadastro.component.css']
})
export class TimeCadastroComponent implements OnInit {

  public resource: any;
  private submitted = false;
  tecnicos: any[] = [];

  constructor(
    private router: Router,
    private timeService: TimeService,
    private menssagem: Menssagens,
  ) {
  }

  ngOnInit(): void {
    this.resource = new TimeModel();

    this.buscarTecnicos();
  }

  onSubmit(timeForm: NgForm) {
    this.submitted = true;

    if (!timeForm.invalid) {
      if (!this.isVazio(this.resource.nomePerfil)) {
        this.salvar();
      }
    } else {
      console.log(timeForm.value)
    }
  }

  salvar() {
    this.timeService.cadastro(this.resource).subscribe({
      next: () => {
        this.menssagem.sucesso('Time cadastrado com sucesso')
        this.voltar()
      }
      ,
      error: error => {
        this.menssagem.erroComum('Erro', error.error.message)
      }
    });
  }

  buscarTecnicos() {
    this.timeService.listarTecnicos().subscribe(binla => {
      this.tecnicos = binla;
    });
  }

  voltar() {
    this.router.navigate(['/time-consulta'])
  }

  public isVazio(value: any): boolean {
    return Utils.isNullOrUndefinedOrEmpty(value);
  }
}
