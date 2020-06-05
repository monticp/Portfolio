import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionCertificationsComponent } from './app.section.certifications.component';

describe('AppSectionCertificationsComponent', () => {
  let component: AppSectionCertificationsComponent;
  let fixture: ComponentFixture<AppSectionCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
