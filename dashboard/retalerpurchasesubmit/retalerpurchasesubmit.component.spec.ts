import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetalerpurchasesubmitComponent } from './retalerpurchasesubmit.component';

describe('RetalerpurchasesubmitComponent', () => {
  let component: RetalerpurchasesubmitComponent;
  let fixture: ComponentFixture<RetalerpurchasesubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetalerpurchasesubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetalerpurchasesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
