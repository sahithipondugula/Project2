import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncyloComponent } from './encylo.component';

describe('EncyloComponent', () => {
  let component: EncyloComponent;
  let fixture: ComponentFixture<EncyloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncyloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncyloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
