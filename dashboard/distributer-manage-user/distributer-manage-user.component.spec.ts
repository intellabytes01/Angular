import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributerManageUserComponent } from './distributer-manage-user.component';

describe('DistributerManageUserComponent', () => {
  let component: DistributerManageUserComponent;
  let fixture: ComponentFixture<DistributerManageUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributerManageUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributerManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
