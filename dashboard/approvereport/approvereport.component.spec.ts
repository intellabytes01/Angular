import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovereportComponent } from './approvereport.component';

describe('ApprovereportComponent', () => {
  let component: ApprovereportComponent;
  let fixture: ComponentFixture<ApprovereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
