import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoComputoComponent } from './equipo-computo.component';

describe('EquipoComputoComponent', () => {
  let component: EquipoComputoComponent;
  let fixture: ComponentFixture<EquipoComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoComputoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
