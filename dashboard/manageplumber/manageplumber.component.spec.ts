import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageplumberComponent } from './manageplumber.component';

describe('ManageplumberComponent', () => {
  let component: ManageplumberComponent;
  let fixture: ComponentFixture<ManageplumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageplumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageplumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
