import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerRewardCatalogueComponent } from './retailer-reward-catalogue.component';

describe('RetailerRewardCatalogueComponent', () => {
  let component: RetailerRewardCatalogueComponent;
  let fixture: ComponentFixture<RetailerRewardCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerRewardCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerRewardCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
