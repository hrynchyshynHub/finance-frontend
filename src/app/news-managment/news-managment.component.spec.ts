import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsManagmentComponent } from './news-managment.component';

describe('NewsManagmentComponent', () => {
  let component: NewsManagmentComponent;
  let fixture: ComponentFixture<NewsManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
