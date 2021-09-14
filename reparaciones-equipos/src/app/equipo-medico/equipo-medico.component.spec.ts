import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoMedicoComponent } from './equipo-medico.component';

describe('EquipoMedicoComponent', () => {
  let component: EquipoMedicoComponent;
  let fixture: ComponentFixture<EquipoMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
