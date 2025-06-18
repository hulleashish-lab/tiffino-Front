import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 // ✅ Replace RouterLink with RouterModule
import { RouterLink, RouterModule } from '@angular/router'
@Component({
  selector: 'app-subscription',
  standalone:true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterLink],
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {
  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.subscriptionForm = this.fb.group({
      plan: ['weekly'],
      mealType: ['lunch'],
      frequency: ['single'],
      oneTimeOrder: [false]
    });
  }

  submit() {
    console.log(this.subscriptionForm.value);
    alert('Subscription selected successfully!');
  }
   goToLogin() {
    this.router.navigate(['/login']);
  }
}
