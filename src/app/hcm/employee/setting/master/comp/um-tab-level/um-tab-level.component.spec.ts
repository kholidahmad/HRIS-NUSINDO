import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmTabLevelComponent } from './um-tab-level.component';

describe('UmTabLevelComponent', () => {
  let component: UmTabLevelComponent;
  let fixture: ComponentFixture<UmTabLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmTabLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmTabLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
