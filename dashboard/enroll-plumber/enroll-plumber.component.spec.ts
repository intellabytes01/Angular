import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollPlumberComponent } from './enroll-plumber.component';

describe('EnrollPlumberComponent', () => {
  let component: EnrollPlumberComponent;
  let fixture: ComponentFixture<EnrollPlumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollPlumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollPlumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
