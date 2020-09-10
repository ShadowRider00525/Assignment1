import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserchatComponent } from './superuserchat.component';

describe('SuperuserchatComponent', () => {
  let component: SuperuserchatComponent;
  let fixture: ComponentFixture<SuperuserchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
