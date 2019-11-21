import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfeedbackComponent } from './rfeedback.component';

describe('RfeedbackComponent', () => {
  let component: RfeedbackComponent;
  let fixture: ComponentFixture<RfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
