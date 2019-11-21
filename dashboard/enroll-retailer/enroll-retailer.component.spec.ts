import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollRetailerComponent } from './enroll-retailer.component';

describe('EnrollRetailerComponent', () => {
  let component: EnrollRetailerComponent;
  let fixture: ComponentFixture<EnrollRetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollRetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
