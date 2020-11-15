import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmLevel3EditComponent } from './um-level2-edit.component';

describe('UmLevel2EditComponent', () => {
  let component: UmLevel3EditComponent;
  let fixture: ComponentFixture<UmLevel3EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLevel3EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmLevel3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
