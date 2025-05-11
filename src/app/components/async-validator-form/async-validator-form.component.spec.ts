import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidatorFormComponent } from './async-validator-form.component';

describe('AsyncValidatorFormComponent', () => {
  let component: AsyncValidatorFormComponent;
  let fixture: ComponentFixture<AsyncValidatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncValidatorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncValidatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
