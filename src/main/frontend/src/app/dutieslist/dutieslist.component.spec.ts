import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutieslistComponent } from './dutieslist.component';

describe('DutieslistComponent', () => {
  let component: DutieslistComponent;
  let fixture: ComponentFixture<DutieslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutieslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
