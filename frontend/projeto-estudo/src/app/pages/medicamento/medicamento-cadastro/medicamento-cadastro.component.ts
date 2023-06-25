import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menssagens } from 'src/app/menssagem/menssagens';
import { Via } from 'src/app/interfaces/Via';
import {MedicamentoService} from "../medicamento.service";

@Component({
  selector: 'app-medicamento-cadastro',
  templateUrl: './medicamento-cadastro.component.html',
  styleUrls: ['./medicamento-cadastro.component.css'],
})
export class MedicamentoCadastroComponent implements OnInit {
  via: Via[];

  constructor(private router: Router, private menssagem: Menssagens, private medicamentoService: MedicamentoService) {
    this.via = [
      { name: 'ORAL', descricao: 'Oral' },
      { name: 'INTRAVENOSA', descricao: 'Intravenosa' },
      { name: 'SUBCUTANEA', descricao: 'Subcutânea' },
      { name: 'TOPICA', descricao: 'Tópica' },
      { name: 'RETAL', descricao: 'Retal' },
      { name: 'OFTALMICA', descricao: 'Oftálmica' },
      { name: 'NASAL', descricao: 'Nasal' },
      { name: 'INALATORIA', descricao: 'Inalatória' },
    ];
  }

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.medicamentoService.cadastro(form.value).subscribe({
        next: () => {
          this.menssagem.sucesso('Medicamento cadastrado com sucesso!');
        },
        error: (error) => {
          this.menssagem.erroComum('Erro', error);
        }
      })
    } else {
      alert('Cadastro inválido');
    }
  }
}
