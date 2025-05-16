import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageComponent } from './localstorage.component';

describe('LocalstorageComponent', () => {
  let component: LocalstorageComponent;
  let fixture: ComponentFixture<LocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalstorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
