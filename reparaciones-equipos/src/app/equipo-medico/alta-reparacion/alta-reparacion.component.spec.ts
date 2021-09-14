import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaReparacionComponent } from './alta-reparacion.component';

describe('AltaReparacionComponent', () => {
  let component: AltaReparacionComponent;
  let fixture: ComponentFixture<AltaReparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaReparacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaReparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
