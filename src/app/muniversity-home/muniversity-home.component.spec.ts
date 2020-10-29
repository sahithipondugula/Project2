import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuniversityHomeComponent } from './muniversity-home.component';

describe('MuniversityHomeComponent', () => {
  let component: MuniversityHomeComponent;
  let fixture: ComponentFixture<MuniversityHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuniversityHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuniversityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
