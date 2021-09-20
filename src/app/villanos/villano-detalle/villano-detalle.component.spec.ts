import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanoDetalleComponent } from './villano-detalle.component';

describe('VillanoDetalleComponent', () => {
  let component: VillanoDetalleComponent;
  let fixture: ComponentFixture<VillanoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillanoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
