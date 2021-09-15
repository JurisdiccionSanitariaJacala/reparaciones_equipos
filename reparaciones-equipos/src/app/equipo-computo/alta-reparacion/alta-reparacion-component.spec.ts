import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaReparacionComputoComponent } from './alta-reparacion-computo.component';

describe('AltaReparacionComputoComponent', () => {
  let component: AltaReparacionComputoComponent;
  let fixture: ComponentFixture<AltaReparacionComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaReparacionComputoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaReparacionComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
