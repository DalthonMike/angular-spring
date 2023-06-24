import {Component, OnInit} from '@angular/core';
import {TimeService} from "../time.service";
import {TimeResponseModel} from "../model/time-response.model";
import {Router} from "@angular/router";
import {Menssagens} from "../../../menssagem/menssagens";

@Component({
  selector: 'app-time-consulta',
  templateUrl: './time-consulta.component.html',
  styleUrls: ['./time-consulta.component.css']
})
export class TimeConsultaComponent implements OnInit {

  times: TimeResponseModel[] = [];
  checkTodas: any;


  constructor(private timeService: TimeService,
              public router: Router,
              private mensagens: Menssagens) {
  }

  ngOnInit(): void {
    this.listaPadrao();
  }

  checkBoxChange(check: boolean) {
    if (check) {
      this.listarTodas()
    } else {
      this.listaPadrao();
    }
  }

  listarTodas() {
    this.timeService.listarTodas().subscribe(response => {
      this.times = response;
    })
  }

  listaPadrao() {
    this.timeService.listar().subscribe(response => {
      this.times = response;
    })
  }

  editar(time: any) {
    const dadosEdicao = {
      id: time.id,

    }
    this.router.navigate(['/time-edita'], {
      state: {dados: dadosEdicao}
    });
  }

  excluir(id: number) {
    this.mensagens.erroComOpcaoSimNao('Exclusão', 'Deseja realmente excluir esse time?')
      .then(response => {
        if (response.value) {
          this.confirmaRemocao(id);
        }
      })
}

    confirmaRemocao(id: number) {
      this.timeService.exclusao(id)
        .subscribe(response => {
          this.mensagens.sucesso('Time excluida com sucesso')
          this.ngOnInit();
        }, error => {
          this.mensagens.erroComum('Erro', error.error.details)
        });
    }

}
