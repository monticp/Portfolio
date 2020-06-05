import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFootbarComponent } from './app.footbar.component';

describe('AppFootbarComponent', () => {
  let component: AppFootbarComponent;
  let fixture: ComponentFixture<AppFootbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFootbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFootbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
