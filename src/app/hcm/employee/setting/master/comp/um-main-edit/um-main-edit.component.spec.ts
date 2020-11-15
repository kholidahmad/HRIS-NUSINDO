import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmMainEditComponent } from './um-main-edit.component';

describe('UmMainEditComponent', () => {
  let component: UmMainEditComponent;
  let fixture: ComponentFixture<UmMainEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmMainEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmMainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
