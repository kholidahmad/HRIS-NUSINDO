import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmMainComponent } from './um-main.component';

describe('UmMainComponent', () => {
  let component: UmMainComponent;
  let fixture: ComponentFixture<UmMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
