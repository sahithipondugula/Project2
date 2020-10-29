import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcasestudyComponent } from './addnewcasestudy.component';

describe('AddnewcasestudyComponent', () => {
  let component: AddnewcasestudyComponent;
  let fixture: ComponentFixture<AddnewcasestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcasestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
