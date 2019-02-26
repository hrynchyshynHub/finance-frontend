import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FinanceManagmentComponentComponent} from './finance-managment-component.component';

describe('FinanceManagmentComponentComponent', () => {
  let component: FinanceManagmentComponentComponent;
  let fixture: ComponentFixture<FinanceManagmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceManagmentComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
