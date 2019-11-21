import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsupportComponent } from './rsupport.component';

describe('RsupportComponent', () => {
  let component: RsupportComponent;
  let fixture: ComponentFixture<RsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
