import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NoteManagmentComponentComponent} from './note-managment-component.component';

describe('NoteManagmentComponentComponent', () => {
  let component: NoteManagmentComponentComponent;
  let fixture: ComponentFixture<NoteManagmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoteManagmentComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteManagmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
