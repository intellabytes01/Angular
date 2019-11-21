import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RorderIntentComponent } from './rorder-intent.component';

describe('RorderIntentComponent', () => {
  let component: RorderIntentComponent;
  let fixture: ComponentFixture<RorderIntentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RorderIntentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RorderIntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
