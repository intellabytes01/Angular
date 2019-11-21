import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReedemptionCatalogueComponent } from './reedemption-catalogue.component';

describe('ReedemptionCatalogueComponent', () => {
  let component: ReedemptionCatalogueComponent;
  let fixture: ComponentFixture<ReedemptionCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReedemptionCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReedemptionCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
