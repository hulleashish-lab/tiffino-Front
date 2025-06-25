import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface Review {
  id: number;
  rating: number;
  reviewText: string;
  imageUrl?: string;
  likes: number;
  comments: string[];
  user: string;
  date: Date;
}
@Component({
  selector: 'app-rating-review',
  standalone:true,
  imports:[CommonModule,
    RouterLink,
    FormsModule,
      ReactiveFormsModule,
      RouterModule ],
  templateUrl: './Rating&Review.component.html',
  styleUrls: ['./Rating&Review.component.css']
})

export class RatingReviewComponent {
 
 reviewForm: FormGroup;
  imageFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  reviews: Review[] = [];
  currentRating = 0;
  hoveredRating = 0;
  commentInputs: { [key: number]: string } = {};

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      reviewText: ['', Validators.required],
      rating: [null, Validators.required]
    });
  }

  onStarClick(rating: number) {
    this.currentRating = rating;
    this.reviewForm.controls['rating'].setValue(rating);
  }

  onStarHover(rating: number) {
    this.hoveredRating = rating;
  }

  onStarLeave() {
    this.hoveredRating = 0;
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  submitReview() {
    if (this.reviewForm.invalid) return;

    const newReview: Review = {
      id: Date.now(),
      rating: this.reviewForm.value.rating,
      reviewText: this.reviewForm.value.reviewText,
      imageUrl: this.imagePreview?.toString(),
      likes: 0,
      comments: [],
      user: 'Anonymous User',
      date: new Date()
    };

    this.reviews.unshift(newReview);
    this.reviewForm.reset();
    this.imageFile = null;
    this.imagePreview = null;
    this.currentRating = 0;
  }

  likeReview(review: Review) {
    review.likes++;
  }

  addComment(review: Review) {
    const comment = this.commentInputs[review.id];
    if (comment?.trim()) {
      review.comments.push(comment);
      this.commentInputs[review.id] = '';
    }
  }

  share(review: Review) {
    alert('Sharing review on social media!');
  }

  get communityFavorites(): Review[] {
    return this.reviews
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 3);
  }
  shareOnInstagram() {
  if (navigator.share) {
    navigator.share({
      title: 'Check out my meal!',
      text: 'Loved this dish 🍽️!',
      url: this.imagePreview as string
    }).catch(err => console.error('Share failed:', err));
  } else {
    alert('Sharing not supported on this device/browser.');
  }
}


}

