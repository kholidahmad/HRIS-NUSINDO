import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmLevel2Component } from './um-level2.component';

describe('UmLevel2Component', () => {
  let component: UmLevel2Component;
  let fixture: ComponentFixture<UmLevel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLevel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
