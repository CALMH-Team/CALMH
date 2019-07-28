import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsPage } from './conditions.page';

describe('ConditionsPage', () => {
  let component: ConditionsPage;
  let fixture: ComponentFixture<ConditionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
