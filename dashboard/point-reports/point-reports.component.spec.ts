import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointReportsComponent } from './point-reports.component';

describe('PointReportsComponent', () => {
  let component: PointReportsComponent;
  let fixture: ComponentFixture<PointReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
