import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeConfirmacionComponent } from './mensaje-confirmacion.component';

describe('MensajeConfirmacionComponent', () => {
  let component: MensajeConfirmacionComponent;
  let fixture: ComponentFixture<MensajeConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
