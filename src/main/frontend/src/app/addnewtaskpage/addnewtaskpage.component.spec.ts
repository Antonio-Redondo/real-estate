import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewtaskpageComponent } from './addnewtaskpage.component';

describe('AddnewtaskpageComponent', () => {
  let component: AddnewtaskpageComponent;
  let fixture: ComponentFixture<AddnewtaskpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewtaskpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewtaskpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
