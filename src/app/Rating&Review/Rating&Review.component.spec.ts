import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingReviewComponent } from './Rating&review.component';

describe('MenuListComponent', () => {
  let component:  RatingReviewComponent ;
  let fixture: ComponentFixture< RatingReviewComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RatingReviewComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent( RatingReviewComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
