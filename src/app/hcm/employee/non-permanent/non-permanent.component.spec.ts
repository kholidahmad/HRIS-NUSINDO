import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonPermanentComponent } from './non-permanent.component';

describe('NonPermanentComponent', () => {
  let component: NonPermanentComponent;
  let fixture: ComponentFixture<NonPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
