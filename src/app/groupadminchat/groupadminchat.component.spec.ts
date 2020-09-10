import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupadminchatComponent } from './groupadminchat.component';

describe('GroupadminchatComponent', () => {
  let component: GroupadminchatComponent;
  let fixture: ComponentFixture<GroupadminchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupadminchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupadminchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
