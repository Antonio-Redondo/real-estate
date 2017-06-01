import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoginformationComponent } from './dialoginformation.component';

describe('DialoginformationComponent', () => {
  let component: DialoginformationComponent;
  let fixture: ComponentFixture<DialoginformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoginformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoginformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
