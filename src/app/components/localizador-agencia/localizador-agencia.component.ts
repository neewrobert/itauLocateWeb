import { Component, OnInit } from '@angular/core';
import { LocalizadorAgenciaService } from './localizador-agencia.service';
import { IconProperties } from './model/icon-properties.model';
import { AgenciaModel } from './model/agencia-model.model';
import { LatLngModel } from './model/lat-lng-model.model';

@Component({
  selector: 'app-localizador-agencia',
  templateUrl: './localizador-agencia.component.html',
  styleUrls: ['./localizador-agencia.component.scss']
})
export class LocalizadorAgenciaComponent implements OnInit {

  latitude: number;
  longitude: number;

  agencias: AgenciaModel[] = [];

  openAgencyInfo = false;

  icon: IconProperties = new IconProperties();

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
  }

  getAgencias() {
    const body: LatLngModel = new LatLngModel();
    body.lat = this.latitude;
    body.lng = this.longitude;
    this.localizadorAgenciaService.getAgencias(body).subscribe((res: AgenciaModel[]) => {
      this.agencias = res;
    });
  }

}
