import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogsComponent } from './user-dialogs.component';

describe('UserDialogsComponent', () => {
  let component: UserDialogsComponent;
  let fixture: ComponentFixture<UserDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
