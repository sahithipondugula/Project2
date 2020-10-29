import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamttestComponent } from './examttest.component';

describe('ExamttestComponent', () => {
  let component: ExamttestComponent;
  let fixture: ComponentFixture<ExamttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
