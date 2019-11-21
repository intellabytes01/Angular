import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberpurchasesubmitComponent } from './plumberpurchasesubmit.component';

describe('PlumberpurchasesubmitComponent', () => {
  let component: PlumberpurchasesubmitComponent;
  let fixture: ComponentFixture<PlumberpurchasesubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlumberpurchasesubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlumberpurchasesubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
