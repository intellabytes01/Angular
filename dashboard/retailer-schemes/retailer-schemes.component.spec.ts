import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSchemesComponent } from './retailer-schemes.component';

describe('RetailerSchemesComponent', () => {
  let component: RetailerSchemesComponent;
  let fixture: ComponentFixture<RetailerSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
