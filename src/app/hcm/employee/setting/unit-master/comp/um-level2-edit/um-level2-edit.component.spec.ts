import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmLevel2EditComponent } from './um-level2-edit.component';

describe('UmLevel2EditComponent', () => {
  let component: UmLevel2EditComponent;
  let fixture: ComponentFixture<UmLevel2EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLevel2EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmLevel2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
