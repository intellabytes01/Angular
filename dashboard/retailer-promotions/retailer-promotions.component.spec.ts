import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerPromotionsComponent } from './retailer-promotions.component';

describe('RetailerPromotionsComponent', () => {
  let component: RetailerPromotionsComponent;
  let fixture: ComponentFixture<RetailerPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
