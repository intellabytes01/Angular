import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailersalesubmitComponent } from './retailersalesubmit.component';

describe('RetailersalesubmitComponent', () => {
  let component: RetailersalesubmitComponent;
  let fixture: ComponentFixture<RetailersalesubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailersalesubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailersalesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
