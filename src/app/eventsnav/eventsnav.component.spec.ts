import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsnavComponent } from './eventsnav.component';

describe('EventsnavComponent', () => {
  let component: EventsnavComponent;
  let fixture: ComponentFixture<EventsnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
