import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesComponent } from './duties.component';

describe('DutiesComponent', () => {
  let component: DutiesComponent;
  let fixture: ComponentFixture<DutiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
