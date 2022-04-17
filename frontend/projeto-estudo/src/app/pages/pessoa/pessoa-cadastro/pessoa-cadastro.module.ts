import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoaCadastroComponent} from './pessoa-cadastro.component';
import {CardModule} from 'primeng/card';
import {SharedModule} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  declarations: [
    PessoaCadastroComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    SharedModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PessoaCadastroModule {
}
