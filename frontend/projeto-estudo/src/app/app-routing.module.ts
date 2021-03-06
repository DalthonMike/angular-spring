import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PessoaCadastroComponent} from "./pages/pessoa/pessoa-cadastro/pessoa-cadastro.component";
import {PessoaConsultaComponent} from "./pages/pessoa/pessoa-consulta/pessoa-consulta.component";


const routes: Routes = [
  {path: '', component: PessoaConsultaComponent},
  {path: 'pessoa-consulta', component: PessoaConsultaComponent},
  {path: 'pessoa-cadastro', component: PessoaCadastroComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
