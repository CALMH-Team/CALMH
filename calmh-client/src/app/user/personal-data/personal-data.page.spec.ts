import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataPage } from './personal-data.page';

describe('PersonalDataPage', () => {
  let component: PersonalDataPage;
  let fixture: ComponentFixture<PersonalDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
