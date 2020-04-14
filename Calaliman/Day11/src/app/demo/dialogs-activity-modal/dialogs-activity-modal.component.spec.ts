import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsActivityModalComponent } from './dialogs-activity-modal.component';

describe('DialogsActivityModalComponent', () => {
  let component: DialogsActivityModalComponent;
  let fixture: ComponentFixture<DialogsActivityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsActivityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsActivityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
