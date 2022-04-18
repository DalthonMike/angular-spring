import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PessoaCadastroComponent} from "./pages/pessoa/pessoa-cadastro/pessoa-cadastro.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'pessoa-cadastro', component: PessoaCadastroComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
}
