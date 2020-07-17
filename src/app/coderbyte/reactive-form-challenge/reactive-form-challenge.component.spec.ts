import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormChallengeComponent } from './reactive-form-challenge.component';

describe('ReactiveFormChallengeComponent', () => {
  let component: ReactiveFormChallengeComponent;
  let fixture: ComponentFixture<ReactiveFormChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
