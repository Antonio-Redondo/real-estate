import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntaskComponent } from './dropdowntask.component';

describe('DropdowntaskComponent', () => {
  let component: DropdowntaskComponent;
  let fixture: ComponentFixture<DropdowntaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdowntaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowntaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
