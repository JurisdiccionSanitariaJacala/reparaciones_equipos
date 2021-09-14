import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaComputoComponent } from './baja-computo.component';

describe('BajaComputoComponent', () => {
  let component: BajaComputoComponent;
  let fixture: ComponentFixture<BajaComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaComputoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
