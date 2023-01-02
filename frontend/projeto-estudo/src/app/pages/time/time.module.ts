import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeCadastroComponent} from './time-cadastro/time-cadastro.component';
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {InputTextModule} from 'primeng/inputtext';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    TimeCadastroComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    SharedModule,
    InputTextModule,
    CascadeSelectModule, ButtonModule, DropdownModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TimeModule {
}
