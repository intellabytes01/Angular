import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleSubmitComponent } from './sale-submit.component';

describe('SaleSubmitComponent', () => {
  let component: SaleSubmitComponent;
  let fixture: ComponentFixture<SaleSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
