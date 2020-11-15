import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUploadPhotoComponent } from './emp-upload-photo.component';

describe('EmpUploadPhotoComponent', () => {
  let component: EmpUploadPhotoComponent;
  let fixture: ComponentFixture<EmpUploadPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpUploadPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUploadPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
