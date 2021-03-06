import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PessoaConsultaComponent} from './pessoa-consulta.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {SplitButtonModule} from "primeng/splitbutton";
import {CpfPipe} from "../../pipe/CpfPipe";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {SideBarModule} from "../../side-bar/side-bar.module";


@NgModule({
  declarations: [
    PessoaConsultaComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    CardModule,
    SplitButtonModule,
    CheckboxModule,
    FormsModule,
    SideBarModule
  ]
})
export class PessoaConsultaModule {
}
