import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/User';
import { UserLogin } from '../interfaces/Userlogin';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UserRegister } from '../interfaces/Userregister';
 // Interface for registration form data

const userKey = 'user'; // Key for local storage

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient,) {
    this.userObservable = this.userSubject.asObservable();
  }

  // Register a new user
  register(userRegister: UserRegister): Observable<User> {
    const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your actual API URL

    return this.http.post<User>(apiUrl, userRegister).pipe(
      tap({
        next: (user) => {
          // Successfully registered, store user data in localStorage
          this.setUserToLocalStorage(user);
          this.userSubject.next(user); // Update the BehaviorSubject with the new user data
          console.log(`User registered successfully: ${user.id}`);
 
        },
        error: (error) => {
          // Log error message to the console
          console.error('Registration failed:', error.error);
        },
      })
    );
  }

  login(userLogin: UserLogin): Observable<User> {
    return this.http.post<User>('https://fakestoreapi.com/products/1', userLogin).pipe(
      tap({
        next: (user) => {
          // Save the logged in user to local storage and trigger a notification about it
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          console.log(
            `Welcome to Foodmine ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          // Display error message if login fails
          console.log(errorResponse.error, 'Login Failed')
        }
      })
    )

  }


  // Get user data from local storage
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(userKey);
    if (userJson) {
      return JSON.parse(userJson) as User;
    }
    return new User(); // Return an empty User object if no user data is found
  }

  // Set user data in local storage
  private setUserToLocalStorage(user: User): void {
    localStorage.setItem(userKey, JSON.stringify(user)); // Save user data in localStorage
  }

  // Optional: Logout method to remove user from local storage
  logout(): void {
    this.userSubject.next(new User()); // Reset the BehaviorSubject
    localStorage.removeItem(userKey); // Remove user data from local storage
    console.log('User has logged out successfully.');
  }
}