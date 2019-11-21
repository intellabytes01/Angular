import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributersalesubmitComponent } from './distributersalesubmit.component';

describe('DistributersalesubmitComponent', () => {
  let component: DistributersalesubmitComponent;
  let fixture: ComponentFixture<DistributersalesubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributersalesubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributersalesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
