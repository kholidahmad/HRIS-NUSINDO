import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoTableComponent } from './kendo-table.component';

describe('KendoTableComponent', () => {
  let component: KendoTableComponent;
  let fixture: ComponentFixture<KendoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
