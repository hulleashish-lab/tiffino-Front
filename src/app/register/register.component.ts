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
datas:any;
userData: any = null;
showpopup: boolean = false;

  returnUrl = ''; // This can be set from query params if needed

  constructor(
    private fb: FormBuilder,
   
    private registrationService: RegistrationService,
   private activatedRoute: ActivatedRoute, private router: Router // Inject the RegistrationService
   // Inject ToastrService for feedback
  ) {}

    ngOnInit(): void {
      


  

    
    // Initialize the form
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', [Validators.required]],
    });
      /*this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/login';*/
    }

  // Getter for form controls
  get f() {
    return this.signupForm.controls;
  }

  // Handle form submission
  onSubmit() {
    this.isSubmit = true;
    if (this.signupForm.valid)  {
      const fv = this.signupForm.value;
      
      const data: UserRegister = {
        name: fv.name!,
        email: fv.email!,
        phone: fv.phone!,
        dob: fv.dob!,
      };

      // Call the registration service to register the user
      this.registrationService.register(data).subscribe({
        next:(data) => {
          this.datas=data.id;

          console.log(data.id);
          this.userData = data;
          this.showpopup = true;
          setTimeout(() => {
            this.showpopup = false;
          }, 30000 * 1000);
      /*this.router.navigateByUrl(this.returnUrl);*/
       },
          error: (error) => {
          console.error('Registration error:', error);
          // You could add an error message for the user here, e.g., using Toastr
        },
      
      })
       
      // Optionally reset the form or display a success message
      alert('Account Created: ' + JSON.stringify(this.signupForm.value, null, 2));
      this.signupForm.reset();
    }
    
  }
   
}

