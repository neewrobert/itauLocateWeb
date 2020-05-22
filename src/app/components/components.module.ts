import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizadorAgenciaComponent } from './localizador-agencia/localizador-agencia.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LocalizadorAgenciaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
