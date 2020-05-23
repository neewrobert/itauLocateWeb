import { GeometryModel } from './geometry-model.model';
import { OpeningModel } from './opening-model.model';

export class AgenciaModel {
    
  formattedAddress: string = '';
  geometry: GeometryModel = new GeometryModel();
  name: string = '';
  businessStatus: string = '';
  openingHours: OpeningModel = new OpeningModel();

  constructor() {
  }
}