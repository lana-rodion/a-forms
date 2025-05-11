import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationComponent } from './custom-validation.component';

describe('CustomValidationComponent', () => {
  let component: CustomValidationComponent;
  let fixture: ComponentFixture<CustomValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
