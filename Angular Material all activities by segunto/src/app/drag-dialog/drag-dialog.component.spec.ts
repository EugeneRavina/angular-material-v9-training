import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDialogComponent } from './drag-dialog.component';

describe('DragDialogComponent', () => {
  let component: DragDialogComponent;
  let fixture: ComponentFixture<DragDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
