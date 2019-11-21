import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerReedemHistoryComponent } from './retailer-reedem-history.component';

describe('RetailerReedemHistoryComponent', () => {
  let component: RetailerReedemHistoryComponent;
  let fixture: ComponentFixture<RetailerReedemHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerReedemHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerReedemHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
