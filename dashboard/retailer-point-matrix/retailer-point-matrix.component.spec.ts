import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerPointMatrixComponent } from './retailer-point-matrix.component';

describe('RetailerPointMatrixComponent', () => {
  let component: RetailerPointMatrixComponent;
  let fixture: ComponentFixture<RetailerPointMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerPointMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerPointMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
