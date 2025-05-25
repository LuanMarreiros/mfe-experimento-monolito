import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Rotas } from './enum/rotas.enum';
import { ErroComponent } from './pages/erro/erro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Rotas.Home,
  },
  {
    path: Rotas.Home,
    component: HomeComponent,
  },
  {
    path: Rotas.Erro,
    component: ErroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
