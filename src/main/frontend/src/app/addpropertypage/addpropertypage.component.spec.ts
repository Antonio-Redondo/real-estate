import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpropertypageComponent } from './addpropertypage.component';

describe('AddpropertypageComponent', () => {
  let component: AddpropertypageComponent;
  let fixture: ComponentFixture<AddpropertypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpropertypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpropertypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
