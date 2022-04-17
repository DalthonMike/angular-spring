import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChipsModule} from "primeng/chips";
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {PessoaCadastroModule} from "./pages/pessoa/pessoa-cadastro/pessoa-cadastro.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChipsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    PessoaCadastroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
