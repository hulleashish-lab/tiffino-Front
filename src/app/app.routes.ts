
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AccountRegistrationComponent } from './account-registration/account-registration.component';
import { ForgatePasswordComponent } from './forgate-password/forgate-password.component';
import { AddTocartComponent } from './add-tocart/add-tocart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { FoodcartComponent } from './foodcart/foodcart.component';
import { MembershipPlanComponent } from './membership-plan/membership-plan.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RatingReviewComponent } from './Rating&Review/Rating&Review.component';
import { PaymentcheckoutpageComponent } from './paymentcheckoutpage/paymentcheckoutpage.component';
import { OffersRewardsComponent } from './offers-rewards/offers-rewards.component';
import {paymentComponent} from './payment/payment.component';




export const routes: Routes = [
  {path:'checkpayment',component:PaymentcheckoutpageComponent},
  {path:'review',component:RatingReviewComponent},
  { path: '', component: HomeComponent },
  { path: 'cuisines', component: CuisinesComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'contact',component:ContactComponent},

{ path: 'admin-login', component: AdminLoginComponent },
{path: 'Account-Registration',component: AccountRegistrationComponent},
{path: 'forgate-password',component : ForgatePasswordComponent},

{path: 'foodcart',component : FoodcartComponent},
{path: 'MembershipPlan',component : MembershipPlanComponent},

{path:'addtocart',component:AddTocartComponent},
{path:'wishlist',component:WishlistComponent},
{path:'offers',component:OffersRewardsComponent},
{path:'payment',component:paymentComponent}


];
