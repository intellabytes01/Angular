import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSubmitComponent } from './purchase-submit.component';

describe('PurchaseSubmitComponent', () => {
  let component: PurchaseSubmitComponent;
  let fixture: ComponentFixture<PurchaseSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
