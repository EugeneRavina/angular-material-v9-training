import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModalActivityComponent } from './mat-modal-activity.component';

describe('MatModalActivityComponent', () => {
  let component: MatModalActivityComponent;
  let fixture: ComponentFixture<MatModalActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatModalActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatModalActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
