import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PessoaCadastroComponent} from "./pages/pessoa/pessoa-cadastro/pessoa-cadastro.component";
import {PessoaConsultaComponent} from "./pages/pessoa/pessoa-consulta/pessoa-consulta.component";
import {PessoaEditaComponent} from "./pages/pessoa/pessoa-edita/pessoa-edita.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'pessoa-consulta', component: PessoaConsultaComponent},
  {path: 'pessoa-cadastro', component: PessoaCadastroComponent},
  {path: 'pessoa-edita', component: PessoaEditaComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
