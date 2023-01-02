import {Component, OnInit} from '@angular/core';
import {PessoaService} from "../../pessoa/pessoa.service";

@Component({
  selector: 'app-time-cadastro',
  templateUrl: './time-cadastro.component.html',
  styleUrls: ['./time-cadastro.component.css']
})
export class TimeCadastroComponent implements OnInit {

  tecnicos: any[] = [];

  constructor(
    private pessoaService: PessoaService,
  ) {
  }

  ngOnInit(): void {
    this.buscarTecnicos();
  }

  buscarTecnicos() {
    this.pessoaService.listarTecnicos().subscribe(binla => {
      this.tecnicos = binla;
    });
  }

}
