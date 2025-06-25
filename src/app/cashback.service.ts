import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashbackService {
  private apiUrl = 'https://your-api-url.com/cashback'; // Replace with your real API URL

  constructor(private http: HttpClient) {}

  getCashback(): Observable<{ amount: number }> {
    return this.http.get<{ amount: number }>(this.apiUrl);
  }
}
