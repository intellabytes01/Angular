import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageretailerComponent } from './manageretailer.component';

describe('ManageretailerComponent', () => {
  let component: ManageretailerComponent;
  let fixture: ComponentFixture<ManageretailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageretailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
