import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelActivityComponent } from './model-activity.component';

describe('ModelActivityComponent', () => {
  let component: ModelActivityComponent;
  let fixture: ComponentFixture<ModelActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
