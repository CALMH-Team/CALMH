import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseModalPage } from './edit-case-modal.page';

describe('EditCaseModalPage', () => {
  let component: EditCaseModalPage;
  let fixture: ComponentFixture<EditCaseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCaseModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCaseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
