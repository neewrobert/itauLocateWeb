import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LocalizadorAgenciaComponent } from './components/localizador-agencia/localizador-agencia.component';
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/localizador-agencia', pathMatch: 'full' },
  { path: 'localizador-agencia', component: LocalizadorAgenciaComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
