import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerManageUserComponent } from './retailer-manage-user.component';

describe('RetailerManageUserComponent', () => {
  let component: RetailerManageUserComponent;
  let fixture: ComponentFixture<RetailerManageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerManageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
