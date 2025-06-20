import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealavailabilityComponent } from './mealavailability.component';

describe('MealavailabilityComponent', () => {
  let component: MealavailabilityComponent;
  let fixture: ComponentFixture<MealavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealavailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MealavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
