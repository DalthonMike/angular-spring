import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menssagens } from 'src/app/menssagem/menssagens';
import { Via } from 'src/app/interfaces/via';

@Component({
  selector: 'app-medicamento-cadastro',
  templateUrl: './medicamento-cadastro.component.html',
  styleUrls: ['./medicamento-cadastro.component.css'],
})
export class MedicamentoCadastroComponent implements OnInit {
  via: Via[];

  constructor(private router: Router, private menssagem: Menssagens) {
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
    console.log(form.value);
    if (form.valid) {
      this.menssagem.sucesso('Medicamento cadastrado com sucesso!');
    } else {
      alert('Cadastro inválido');
    }
  }
}
