import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquestionsComponent } from './myquestions.component';

describe('MyquestionsComponent', () => {
  let component: MyquestionsComponent;
  let fixture: ComponentFixture<MyquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
