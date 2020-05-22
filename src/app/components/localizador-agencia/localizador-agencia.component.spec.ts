import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizadorAgenciaComponent } from './localizador-agencia.component';

describe('LocalizadorAgenciaComponent', () => {
  let component: LocalizadorAgenciaComponent;
  let fixture: ComponentFixture<LocalizadorAgenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizadorAgenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizadorAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
