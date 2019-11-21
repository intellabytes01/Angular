import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDistributorComponent } from './import-distributor.component';

describe('ImportDistributorComponent', () => {
  let component: ImportDistributorComponent;
  let fixture: ComponentFixture<ImportDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
