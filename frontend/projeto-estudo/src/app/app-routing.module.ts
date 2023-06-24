import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PessoaCadastroComponent} from "./pages/pessoa/pessoa-cadastro/pessoa-cadastro.component";
import {PessoaConsultaComponent} from "./pages/pessoa/pessoa-consulta/pessoa-consulta.component";
import {PessoaEditaComponent} from "./pages/pessoa/pessoa-edita/pessoa-edita.component";
import {TimeCadastroComponent} from "./pages/time/time-cadastro/time-cadastro.component";
import {TimeConsultaComponent} from "./pages/time/time-consulta/time-consulta.component";


const routes: Routes = [
  {path: '', component: PessoaConsultaComponent},
  {path: 'pessoa-consulta', component: PessoaConsultaComponent},
  {path: 'pessoa-cadastro', component: PessoaCadastroComponent},
  {path: 'pessoa-edita', component: PessoaEditaComponent},
  {path: 'time-cadastro', component: TimeCadastroComponent},
  {path: 'time-consulta', component: TimeConsultaComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
