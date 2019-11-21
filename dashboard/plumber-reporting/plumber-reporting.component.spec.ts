import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberReportingComponent } from './plumber-reporting.component';

describe('PlumberReportingComponent', () => {
  let component: PlumberReportingComponent;
  let fixture: ComponentFixture<PlumberReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumberReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumberReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
