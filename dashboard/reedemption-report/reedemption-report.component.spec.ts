import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReedemptionReportComponent } from './reedemption-report.component';

describe('ReedemptionReportComponent', () => {
  let component: ReedemptionReportComponent;
  let fixture: ComponentFixture<ReedemptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReedemptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReedemptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
