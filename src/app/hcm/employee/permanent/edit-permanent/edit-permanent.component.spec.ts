import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPermanentComponent } from './edit-permanent.component';

describe('EditPermanentComponent', () => {
  let component: EditPermanentComponent;
  let fixture: ComponentFixture<EditPermanentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPermanentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
