import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmLevel1EditComponent } from './um-level1-edit.component';

describe('UmLevel1EditComponent', () => {
  let component: UmLevel1EditComponent;
  let fixture: ComponentFixture<UmLevel1EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmLevel1EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmLevel1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
