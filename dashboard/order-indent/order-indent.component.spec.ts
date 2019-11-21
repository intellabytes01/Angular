import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIndentComponent } from './order-indent.component';

describe('OrderIndentComponent', () => {
  let component: OrderIndentComponent;
  let fixture: ComponentFixture<OrderIndentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderIndentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
