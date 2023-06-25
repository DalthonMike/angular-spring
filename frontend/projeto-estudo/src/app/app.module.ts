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
import {SideNavModule} from "./sidenav/side-nav.module";
import {PessoaEditaComponent} from './pages/pessoa/pessoa-edita/pessoa-edita.component';
import {CommonModule} from "@angular/common";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {SplitButtonModule} from "primeng/splitbutton";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaEditaComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ChipsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    PessoaCadastroModule,
    PessoaConsultaModule,
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
    SideNavModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
