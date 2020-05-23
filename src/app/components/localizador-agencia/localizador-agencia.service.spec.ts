import { TestBed } from '@angular/core/testing';

import { LocalizadorAgenciaService } from './localizador-agencia.service';

describe('LocalizadorAgenciaService', () => {
  let service: LocalizadorAgenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizadorAgenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
