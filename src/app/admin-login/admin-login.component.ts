import { Component } from '@angular/core';
import { RouterLink   } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private route:Router){}
  gotoLogin(){
    this.route.navigate(['/']);
  }


}
