

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../sharingdata/services/login.service';
import { UserLogin } from '../sharingdata/interfaces/Userlogin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  returnurl = '';

  constructor(
    private fb: FormBuilder,
    private registerservice: RegistrationService,
    private router: Router,
    private activated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.returnurl = this.activated.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const lv = this.loginForm.value;
      const logindata: UserLogin = {
        email: lv.Email,
        password: lv.password
      };
      this.registerservice.login(logindata).subscribe(() => {
        this.router.navigateByUrl(this.returnurl);
      });
    }
    alert('Phone number submitted: ' + this.loginForm.value.phone);
      this.loginForm.reset();
  }
}
  