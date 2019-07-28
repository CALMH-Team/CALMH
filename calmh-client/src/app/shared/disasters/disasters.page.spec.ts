import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisastersPage } from './disasters.page';

describe('DisastersPage', () => {
  let component: DisastersPage;
  let fixture: ComponentFixture<DisastersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisastersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisastersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
