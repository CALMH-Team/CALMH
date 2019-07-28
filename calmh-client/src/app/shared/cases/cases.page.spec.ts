import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesPage } from './cases.page';

describe('CasesPage', () => {
  let component: CasesPage;
  let fixture: ComponentFixture<CasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
