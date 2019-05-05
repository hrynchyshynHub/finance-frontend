import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySubscriptionComponent } from './journey-subscription.component';

describe('JourneySubscriptionComponent', () => {
  let component: JourneySubscriptionComponent;
  let fixture: ComponentFixture<JourneySubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneySubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneySubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
