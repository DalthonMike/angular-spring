import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeCadastroComponent} from './time-cadastro/time-cadastro.component';
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {InputTextModule} from 'primeng/inputtext';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from "primeng/dropdown";
import {TimeConsultaComponent} from './time-consulta/time-consulta.component';
import {CheckboxModule} from "primeng/checkbox";
import {TableModule} from "primeng/table";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    TimeCadastroComponent,
    TimeConsultaComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        SharedModule,
        InputTextModule,
        FormsModule,
        CascadeSelectModule, ButtonModule, DropdownModule, CheckboxModule, TableModule, RippleModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TimeModule {
}
