import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'Prajwal Deore',
    email: 'prajwal@example.com',
    phone: '9876543210',
    favorites: ['Paneer Butter Masala', 'Masala Dosa', 'Rajma Rice'],
    orderHistory: [
      { date: '2025-06-10', item: 'Gujarati Thali' },
      { date: '2025-06-08', item: 'South Indian Combo' }
    ],
    reminders: ['Lunch at 1 PM', 'Renew subscription by June 30'],
    dependents: [
      { name: 'Mom', lastOrder: '2025-06-12', status: 'Delivered' },
      { name: 'Brother', lastOrder: '2025-06-11', status: 'In Transit' }
    ]
  };
}
