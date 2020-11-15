import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonPermanentComponent } from './edit-non-permanent.component';

describe('EditNonPermanentComponent', () => {
  let component: EditNonPermanentComponent;
  let fixture: ComponentFixture<EditNonPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNonPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNonPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
