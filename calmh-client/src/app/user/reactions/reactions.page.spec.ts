import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionsPage } from './reactions.page';

describe('ReactionsPage', () => {
  let component: ReactionsPage;
  let fixture: ComponentFixture<ReactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
