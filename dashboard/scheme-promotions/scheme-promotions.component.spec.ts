import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemePromotionsComponent } from './scheme-promotions.component';

describe('SchemePromotionsComponent', () => {
  let component: SchemePromotionsComponent;
  let fixture: ComponentFixture<SchemePromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemePromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemePromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
