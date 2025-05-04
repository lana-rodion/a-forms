import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdformValidationComponent } from './tdform-validation.component';

describe('TdformValidationComponent', () => {
  let component: TdformValidationComponent;
  let fixture: ComponentFixture<TdformValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdformValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdformValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
