import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ChipsModule} from "primeng/chips";
import {AppRoutingModule} from './app-routing.module';
import {ButtonModule} from "primeng/button";
import {PessoaCadastroModule} from "./pages/pessoa/pessoa-cadastro/pessoa-cadastro.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from "ngx-mask";
import {PessoaConsultaModule} from "./pages/pessoa/pessoa-consulta/pessoa-consulta.module";
import {SideBarModule} from "./pages/side-bar/side-bar.module";
import {PessoaEditaComponent} from './pages/pessoa/pessoa-edita/pessoa-edita.component';
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {SplitButtonModule} from "primeng/splitbutton";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {TimeModule} from "./pages/time/time.module";

@NgModule({
  declarations: [
    AppComponent,
    PessoaEditaComponent,
  ],
  imports: [
    BrowserModule,
    ChipsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    PessoaCadastroModule,
    PessoaConsultaModule,
    TimeModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true
    }),
    CommonModule,
    TableModule,
    ButtonModule,
    CardModule,
    SplitButtonModule,
    CheckboxModule,
    FormsModule,
    SideBarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
