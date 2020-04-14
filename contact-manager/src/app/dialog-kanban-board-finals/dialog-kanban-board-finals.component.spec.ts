import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogKanbanBoardFinalsComponent } from './dialog-kanban-board-finals.component';

describe('DialogKanbanBoardFinalsComponent', () => {
  let component: DialogKanbanBoardFinalsComponent;
  let fixture: ComponentFixture<DialogKanbanBoardFinalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogKanbanBoardFinalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogKanbanBoardFinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
