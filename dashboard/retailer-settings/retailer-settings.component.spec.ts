import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSettingsComponent } from './retailer-settings.component';

describe('RetailerSettingsComponent', () => {
  let component: RetailerSettingsComponent;
  let fixture: ComponentFixture<RetailerSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
