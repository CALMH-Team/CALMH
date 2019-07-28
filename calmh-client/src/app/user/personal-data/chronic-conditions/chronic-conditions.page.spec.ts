import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronicConditionsPage } from './chronic-conditions.page';

describe('ChronicConditionsPage', () => {
  let component: ChronicConditionsPage;
  let fixture: ComponentFixture<ChronicConditionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronicConditionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronicConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
