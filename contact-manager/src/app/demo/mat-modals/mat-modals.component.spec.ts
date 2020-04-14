import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatModalsComponent } from './mat-modals.component';

describe('MatModalsComponent', () => {
  let component: MatModalsComponent;
  let fixture: ComponentFixture<MatModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
