import { Component } from '@angular/core';

import { FooterComponent } from '../footer/footer.component';
interface FoodItem {
  foodItemName: string;
  foodItemPrice: number;
  foodLocation: string;
  foodCategory: string;
  foodstate:string;
  foodImage: string; // URL for the image
}



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
 // URL for the image

export class HomeComponent {
 indianFoodItems:FoodItem[] = [
  {
    foodItemName: "Butter Chicken",
    foodItemPrice: 350.00,
    foodLocation: "North Indian Kitchen",
    foodCategory: "Main Course",
    foodstate:"andhra pradesh",
    foodImage: "https://placehold.co/400x300/F0F8FF/000000?text=Butter+Chicken" // Placeholder image
  },
  {
    foodItemName: "Masala Dosa",
    foodItemPrice: 120.00,
    foodLocation: "South Indian Delights",
    foodCategory: "Breakfast/Snack",
     foodstate:"andhra pradesh",
    foodImage: "https://placehold.co/400x300/F0F8FF/000000?text=Masala+Dosa" // Placeholder image
  },
  {
    foodItemName: "Chole Bhature",
    foodItemPrice: 180.00,
    foodLocation: "Punjabi Dhaba",
    foodCategory: "Breakfast/Lunch",
     foodstate:"andhra pradesh",
    foodImage: "https://placehold.co/400x300/F0F8FF/000000?text=Chole+Bhature" // Placeholder image
  },
  {
    foodItemName: "Paneer Tikka",
    foodItemPrice: 280.00,
    foodLocation: "Grill House",
    foodCategory: "Appetizer",
     foodstate:"andhra pradesh",
    foodImage: "https://placehold.co/400x300/F0F8FF/000000?text=Paneer+Tikka" // Placeholder image
  },
  {
    foodItemName: "Biryani (Chicken)",
    foodItemPrice: 420.00,
    foodLocation: "Hyderabad Biryani House",
    foodCategory: "Rice Dish",
     foodstate:"andhra pradesh",
    foodImage: "https://placehold.co/400x300/F0F8FF/000000?text=Chicken+Biryani" // Placeholder image
  },
  {
    foodItemName: "Gulab Jamun (2 pcs)",
    foodItemPrice: 90.00,
    foodLocation: "Sweet Corner",
    foodCategory: "Dessert",
     foodstate:"andhra pradesh",
    foodImage: "https://placehold.co/400x300/F0F8FF/000000?text=Gulab+Jamun" // Placeholder image
  }
];
}
