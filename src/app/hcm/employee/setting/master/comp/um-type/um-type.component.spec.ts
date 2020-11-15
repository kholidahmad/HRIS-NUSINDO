import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmTypeComponent } from './um-type.component';

describe('UmTypeComponent', () => {
  let component: UmTypeComponent;
  let fixture: ComponentFixture<UmTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
