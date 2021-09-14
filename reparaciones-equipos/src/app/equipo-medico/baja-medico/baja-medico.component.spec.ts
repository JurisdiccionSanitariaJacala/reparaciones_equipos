import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaMedicoComponent } from './baja-medico.component';

describe('BajaMedicoComponent', () => {
  let component: BajaMedicoComponent;
  let fixture: ComponentFixture<BajaMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
