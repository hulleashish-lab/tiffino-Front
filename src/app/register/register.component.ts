import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RegistrationService } from '../sharingdata/services/login.service'; // Use the standalone service
import { UserRegister } from '../sharingdata/interfaces/Userregister'; // Import the UserRegister interface
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
 // For success/error messages
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
declare var particlesJS: any;
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
 // If using Toastr for feedback
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  isSubmit = false;
  step: number = 1;
  userData: any = null;
  showpopup: boolean = false;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      dob: ['', Validators.required],
      roles: [[], Validators.required],
      dietaryPreferences: [[]],
      allergenPreferences: [[]],
      profileImage: [''],
      terms: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  nextStep() {
    if (this.step === 1) {
      this.step = 2;
    }
  }

  prevStep() {
    if (this.step === 2) {
      this.step = 1;
    }
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.signupForm.invalid) return;

    const formValue = this.signupForm.value;
    if (formValue.password !== formValue.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const userData: UserRegister = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      username: formValue.username,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      password: formValue.password,
      dob: formValue.dob,
      roles: formValue.roles,
      dietaryPreferences: formValue.dietaryPreferences,
      allergenPreferences: formValue.allergenPreferences,
      profileImage: formValue.profileImage,
    };

    this.registrationService.register(userData).subscribe({
      next: (res) => {
        this.userData = res;
        this.showpopup = true;
        setTimeout(() => {
          this.showpopup = false;
          this.router.navigate(['/login']);
        }, 5000);
      },
      error: (err) => console.error('Registration failed:', err),
    });
      alert('Account Created: ' + JSON.stringify(this.signupForm.value, null, 2));
    this.signupForm.reset();
    this.step = 1;
  }
}

       
      // Optionally reset the form or display a success message
    
      
    
 
   



