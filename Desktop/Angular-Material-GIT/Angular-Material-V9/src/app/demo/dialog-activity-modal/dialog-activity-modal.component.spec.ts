import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogActivityModalComponent } from './dialog-activity-modal.component';

describe('DialogActivityModalComponent', () => {
  let component: DialogActivityModalComponent;
  let fixture: ComponentFixture<DialogActivityModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogActivityModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogActivityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
