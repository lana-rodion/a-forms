import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteparamsComponent } from './routeparams.component';

describe('RouteparamsComponent', () => {
  let component: RouteparamsComponent;
  let fixture: ComponentFixture<RouteparamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteparamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
