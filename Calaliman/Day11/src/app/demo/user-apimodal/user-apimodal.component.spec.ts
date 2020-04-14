import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAPIModalComponent } from './user-apimodal.component';

describe('UserAPIModalComponent', () => {
  let component: UserAPIModalComponent;
  let fixture: ComponentFixture<UserAPIModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAPIModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAPIModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
