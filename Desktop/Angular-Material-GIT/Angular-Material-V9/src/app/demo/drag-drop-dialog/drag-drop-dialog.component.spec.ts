import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropDialogComponent } from './drag-drop-dialog.component';

describe('DragDropDialogComponent', () => {
  let component: DragDropDialogComponent;
  let fixture: ComponentFixture<DragDropDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
