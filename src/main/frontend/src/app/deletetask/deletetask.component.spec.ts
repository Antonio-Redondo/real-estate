import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetaskComponent } from './deletetask.component';

describe('DeletetaskComponent', () => {
  let component: DeletetaskComponent;
  let fixture: ComponentFixture<DeletetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
