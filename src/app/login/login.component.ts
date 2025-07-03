import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
 // ✅ Replace RouterLink with RouterModule
import { RouterModule } from '@angular/router'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../sharingdata/services/login.service';

import { UserLogin } from '../sharingdata/interfaces/Userlogin';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule // ✅ Correct module for routing directives
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  issubmit:boolean=false;
  returnurl='';
  constructor(private fb: FormBuilder,private registerservice:RegistrationService,private router:Router,private activated:ActivatedRoute) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phone: ['', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]]
    });
     this.returnurl = this.activated.snapshot.queryParams['returnUrl'] || '/';
  }


   get phoneControl() {
    return this.loginForm.get('phone');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const lv = this.loginForm.value

      const logindata:UserLogin={
        phone:lv.phone!
      }
      this.registerservice
      .login(logindata)
                 .subscribe(() => {
                   this.router.navigateByUrl(this.returnurl); // After successful login, navigate to the stored return URL
      });
  }
      alert('Phone number submitted: ' + this.loginForm.value.phone);
      this.loginForm.reset();
    }
  }