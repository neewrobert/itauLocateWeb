import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LocalizadorAgenciaComponent } from './home/components/localizador-agencia/localizador-agencia.component';


const routes: Routes = [
  { path: '', component: HomeComponent, redirectTo: '/localizador-agencia', pathMatch: 'full',
    children: [
      { path: 'localizador-agencia', component: LocalizadorAgenciaComponent},
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
