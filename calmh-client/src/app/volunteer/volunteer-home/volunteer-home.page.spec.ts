import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHomePage } from './volunteer-home.page';

describe('VolunteerHomePage', () => {
  let component: VolunteerHomePage;
  let fixture: ComponentFixture<VolunteerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerHomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
