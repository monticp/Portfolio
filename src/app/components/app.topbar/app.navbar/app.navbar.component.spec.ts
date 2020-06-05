import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.NavbarComponent } from './app.navbar.component';

describe('App.NavbarComponent', () => {
  let component: App.NavbarComponent;
  let fixture: ComponentFixture<App.NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
