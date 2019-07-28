import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDisasterModalComponent } from './edit-disaster-modal.page';

describe('EditDisasterModalComponent', () => {
  let component: EditDisasterModalComponent;
  let fixture: ComponentFixture<EditDisasterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditDisasterModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDisasterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
