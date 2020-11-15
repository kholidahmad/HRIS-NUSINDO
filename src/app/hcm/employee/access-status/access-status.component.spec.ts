import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessStatusComponent } from './access-status.component';

describe('AccessStatusComponent', () => {
  let component: AccessStatusComponent;
  let fixture: ComponentFixture<AccessStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
