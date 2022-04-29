import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotModalComponent } from './forgot-modal.component';

describe('ForgotModalComponent', () => {
  let component: ForgotModalComponent;
  let fixture: ComponentFixture<ForgotModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
