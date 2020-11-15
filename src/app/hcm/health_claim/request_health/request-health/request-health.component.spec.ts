import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestHealthComponent } from './request-health.component';

describe('RequestHealthComponent', () => {
  let component: RequestHealthComponent;
  let fixture: ComponentFixture<RequestHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
