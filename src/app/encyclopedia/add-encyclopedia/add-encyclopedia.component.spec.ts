import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEncyclopediaComponent } from './add-encyclopedia.component';

describe('AddEncyclopediaComponent', () => {
  let component: AddEncyclopediaComponent;
  let fixture: ComponentFixture<AddEncyclopediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEncyclopediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEncyclopediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
