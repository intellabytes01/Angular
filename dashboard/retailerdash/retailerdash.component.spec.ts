import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerdashComponent } from './retailerdash.component';

describe('RetailerdashComponent', () => {
  let component: RetailerdashComponent;
  let fixture: ComponentFixture<RetailerdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
