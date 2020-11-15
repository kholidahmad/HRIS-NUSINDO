import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmLevel1Component } from './um-level1.component';

describe('UmLevel1Component', () => {
  let component: UmLevel1Component;
  let fixture: ComponentFixture<UmLevel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLevel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
