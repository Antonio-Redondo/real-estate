import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepropertyComponent } from './deleteproperty.component';

describe('DeletepropertyComponent', () => {
  let component: DeletepropertyComponent;
  let fixture: ComponentFixture<DeletepropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
