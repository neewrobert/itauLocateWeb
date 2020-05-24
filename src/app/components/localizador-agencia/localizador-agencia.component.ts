import { Component, OnInit } from '@angular/core';
import { LocalizadorAgenciaService } from './localizador-agencia.service';
import { IconProperties } from './model/icon-properties.model';
import { AgenciaModel } from './model/agencia-model.model';
import { LatLngModel } from './model/lat-lng-model.model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-localizador-agencia',
  templateUrl: './localizador-agencia.component.html',
  styleUrls: ['./localizador-agencia.component.scss']
})
export class LocalizadorAgenciaComponent implements OnInit {

  latitude: number;
  longitude: number;
  
  cep: string = "";
  isCepInvalido = false;
  inProgress: boolean = true;

  agencias: AgenciaModel[] = [];

  openAgencyInfo = false;

  icon: IconProperties = new IconProperties();

  agenciaSelecionada: AgenciaModel= new AgenciaModel();

  constructor(private localizadorAgenciaService: LocalizadorAgenciaService) { }

  ngOnInit(): void {
    this.getGeoLocation();
  }

   getGeoLocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position['coords']['latitude'];
        this.longitude = position['coords']['longitude'];

        this.getAgencias();
      },
      (failure) => {
        if (failure.message.indexOf("Para utilizar essa página é necessário aceitar a utilização de sua localização!") == 0) {
          alert('Para utilizar essa página é necessário aceitar a utilização de sua localização!');
        }
      }
    );
    this.inProgress = false;
  }

  getAgencias() {
    const body: LatLngModel = new LatLngModel();
    body.lat = this.latitude;
    body.lng = this.longitude;
    this.localizadorAgenciaService.getAgencias(body).subscribe((res: AgenciaModel[]) => {
      this.agencias = res;
    });


  }

   buscarAreaSelecionada($event){
    this.inProgress = true;
    console.log('clicado');
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    console.log(this.latitude)
    this.getAgencias();

    this.inProgress = false;
  }

    buscaPorCep(){
    this.inProgress = true;
    console.log(this.inProgress)
    this.inProgress = true;
    if(this.validaCep(this.cep)){
      this.localizadorAgenciaService.getLocalizacaoPorCep(this.cep).subscribe((res: LatLngModel) =>{
        this.latitude = res.lat;
        this.longitude = res.lng;
      });
      this.isCepInvalido = false;
      this.getAgencias();
    } else{
      this.isCepInvalido = true;
    }

    this.inProgress = false;
  }

  verificaOperacional(agencias: AgenciaModel[]) {
    const agenciasOperacionais: AgenciaModel[] = [];

    agencias.forEach((agencia) => {
      if (agencia.businessStatus === 'OPERATIONAL') {
        agenciasOperacionais.push(agencia);
      }
    });

    return agenciasOperacionais;
  }

  mostrarAgencia(agencia: AgenciaModel) {
    this.openAgencyInfo = true;
    this.agenciaSelecionada = agencia;
  }

  validaCep(cep){
    var exp = /^[0-9]{5}-[0-9]{3}$/;
    if(exp.test(cep)){
      return true;
    } else{
      return false;
    }
                        
}

controlProgressBar(bool: boolean){
  this.inProgress = bool;
}

sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

}
