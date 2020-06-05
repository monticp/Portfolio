import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.HeadbarComponent } from './app.headbar.component';

describe('App.HeadbarComponent', () => {
  let component: App.HeadbarComponent;
  let fixture: ComponentFixture<App.HeadbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.HeadbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.HeadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
