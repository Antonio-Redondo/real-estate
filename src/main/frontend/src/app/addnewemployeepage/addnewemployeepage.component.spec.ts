import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewemployeepageComponent } from './addnewemployeepage.component';

describe('AddnewemployeepageComponent', () => {
  let component: AddnewemployeepageComponent;
  let fixture: ComponentFixture<AddnewemployeepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewemployeepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewemployeepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
