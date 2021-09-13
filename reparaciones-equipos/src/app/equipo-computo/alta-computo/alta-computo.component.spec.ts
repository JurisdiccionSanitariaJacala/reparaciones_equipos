import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaComputoComponent } from './alta-computo.component';

describe('AltaComputoComponent', () => {
  let component: AltaComputoComponent;
  let fixture: ComponentFixture<AltaComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaComputoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
