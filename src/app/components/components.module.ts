import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LocalizadorAgenciaComponent } from './localizador-agencia/localizador-agencia.component';
import { AppRoutingModule } from '../app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LocalizadorAgenciaService } from './localizador-agencia/localizador-agencia.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LocalizadorAgenciaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJi-DIPj-9REUljHmTsU2_5jp1R1XBH4E'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  providers: [
    LocalizadorAgenciaService
  ]
})
export class ComponentsModule { }
