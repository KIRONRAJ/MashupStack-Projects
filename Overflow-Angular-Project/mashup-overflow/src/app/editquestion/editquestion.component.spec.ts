import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditquestionComponent } from './editquestion.component';

describe('EditquestionComponent', () => {
  let component: EditquestionComponent;
  let fixture: ComponentFixture<EditquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
