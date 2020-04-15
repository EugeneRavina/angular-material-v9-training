import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModelsComponent } from './mat-dialog-models.component';

describe('MatDialogModelsComponent', () => {
  let component: MatDialogModelsComponent;
  let fixture: ComponentFixture<MatDialogModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
