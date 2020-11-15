import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHealthComponent } from './report-health.component';

describe('ReportHealthComponent', () => {
  let component: ReportHealthComponent;
  let fixture: ComponentFixture<ReportHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
