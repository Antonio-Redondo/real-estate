import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpropertyComponent } from './dialogproperty.component';

describe('DialogpropertyComponent', () => {
  let component: DialogpropertyComponent;
  let fixture: ComponentFixture<DialogpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
