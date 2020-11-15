import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalHealthComponent } from './approval-health.component';

describe('ApprovalHealthComponent', () => {
  let component: ApprovalHealthComponent;
  let fixture: ComponentFixture<ApprovalHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
