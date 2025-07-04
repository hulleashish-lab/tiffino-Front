export interface UserRegister {
      firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  dob: string; // Use `Date` if you're working with Date objects instead of strings
  roles: string[]; // Adjust type if it's a single role string (e.g., `string` instead of `string[]`)
  dietaryPreferences: string[]; // e.g., ["Vegan", "Gluten-Free"]
  allergenPreferences: string[]; // e.g., ["Peanuts", "Dairy"]
  profileImage: string; 
}