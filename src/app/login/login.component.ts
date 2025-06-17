import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
 // ✅ Replace RouterLink with RouterModule
import { RouterModule } from '@angular/router'
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phone: ['', [
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      alert('Phone number submitted: ' + this.loginForm.value.phone);
      this.loginForm.reset();
    }
  }

  get phoneControl() {
    return this.loginForm.get('phone');
  }
}



