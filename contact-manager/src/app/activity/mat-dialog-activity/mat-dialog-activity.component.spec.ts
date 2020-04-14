import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogActivityComponent } from './mat-dialog-activity.component';

describe('MatDialogActivityComponent', () => {
  let component: MatDialogActivityComponent;
  let fixture: ComponentFixture<MatDialogActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
