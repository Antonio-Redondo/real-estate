import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogtaskComponent } from './dialogtask.component';

describe('DialogtaskComponent', () => {
  let component: DialogtaskComponent;
  let fixture: ComponentFixture<DialogtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
