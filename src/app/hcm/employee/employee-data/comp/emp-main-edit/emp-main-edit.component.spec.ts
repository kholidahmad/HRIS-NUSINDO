import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpMainEditComponent } from './emp-main-edit.component';

describe('UmLevel1EditComponent', () => {
  let component: EmpMainEditComponent;
  let fixture: ComponentFixture<EmpMainEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpMainEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpMainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
