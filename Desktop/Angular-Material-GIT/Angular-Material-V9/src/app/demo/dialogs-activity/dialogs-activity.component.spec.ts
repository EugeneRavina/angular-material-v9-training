import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsActivityComponent } from './dialogs-activity.component';

describe('DialogsActivityComponent', () => {
  let component: DialogsActivityComponent;
  let fixture: ComponentFixture<DialogsActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
