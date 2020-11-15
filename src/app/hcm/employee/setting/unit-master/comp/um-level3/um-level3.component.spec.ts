import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmLevel3Component } from './um-level3.component';

describe('UmLevel3Component', () => {
  let component: UmLevel3Component;
  let fixture: ComponentFixture<UmLevel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLevel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
