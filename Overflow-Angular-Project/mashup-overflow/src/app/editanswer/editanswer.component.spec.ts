import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditanswerComponent } from './editanswer.component';

describe('EditanswerComponent', () => {
  let component: EditanswerComponent;
  let fixture: ComponentFixture<EditanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditanswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
