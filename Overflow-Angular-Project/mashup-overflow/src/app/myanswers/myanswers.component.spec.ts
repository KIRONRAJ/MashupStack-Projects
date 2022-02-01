import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyanswersComponent } from './myanswers.component';

describe('MyanswersComponent', () => {
  let component: MyanswersComponent;
  let fixture: ComponentFixture<MyanswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyanswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
