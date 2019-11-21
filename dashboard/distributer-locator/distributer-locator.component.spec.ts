import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributerLocatorComponent } from './distributer-locator.component';

describe('DistributerLocatorComponent', () => {
  let component: DistributerLocatorComponent;
  let fixture: ComponentFixture<DistributerLocatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributerLocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributerLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
