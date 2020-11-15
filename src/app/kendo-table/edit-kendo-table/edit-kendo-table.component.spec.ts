import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKendoTableComponent } from './edit-kendo-table.component';

describe('EditKendoTableComponent', () => {
  let component: EditKendoTableComponent;
  let fixture: ComponentFixture<EditKendoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKendoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKendoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
