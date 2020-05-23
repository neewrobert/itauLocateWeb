import { GeometryModel } from './geometry-model.model';

export class AgenciaModel {
    
  formattedAddress: string = '';
  geometry: GeometryModel = new GeometryModel();
  name: string = '';
  businessStatus: string = '';

  constructor() {

  }
}