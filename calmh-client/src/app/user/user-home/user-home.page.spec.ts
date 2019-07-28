import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomePage } from './user-home.page';

describe('UserHomePage', () => {
  let component: UserHomePage;
  let fixture: ComponentFixture<UserHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserHomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
