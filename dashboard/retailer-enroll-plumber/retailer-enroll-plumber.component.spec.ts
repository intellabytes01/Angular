import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerEnrollPlumberComponent } from './retailer-enroll-plumber.component';

describe('RetailerEnrollPlumberComponent', () => {
  let component: RetailerEnrollPlumberComponent;
  let fixture: ComponentFixture<RetailerEnrollPlumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerEnrollPlumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerEnrollPlumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
