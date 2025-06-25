import { Component,OnInit } from '@angular/core';
import { CashbackService } from '../cashback.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offers-rewards',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './offers-rewards.component.html',
  styleUrl: './offers-rewards.component.css'
})
export class OffersRewardsComponent implements OnInit {
 cashbackPoints: number = 0;
 streakPoints: number = 0;
  txnId: string = ''
 
  cashbacks = [
  { amount: 25, txnId: 'TXN123', scratched: false },
  { amount: 30, txnId: 'TXN456', scratched: false },
  { amount: 50, txnId: 'TXN789', scratched: false },
  { amount: 60, txnId: 'TXN789', scratched: false },
  { amount: 80, txnId: 'TXN789', scratched: false }
];

 ngOnInit(): void {
  this.loadCashback();
  setInterval(() => this.loadCashback(), 30000);
 
}
 scratchCard(index:number) {
    this.cashbacks[index].scratched = true;
  }

loadCashback(): void {
  // Replace with real HTTP call
  this.cashbackPoints = Math.floor(Math.random() * 100);
   this.streakPoints = Math.floor(Math.random() * 10);
   this.cashbacks.forEach((c, i) => {
    c.amount = c.amount + 1; // Example
   } )
 /*cashbackPoints: number = 0;

  constructor(private cashbackService: CashbackService) {}

  ngOnInit(): void {
    this.loadCashback();
  }

  loadCashback(): void {
    this.cashbackService.getCashback().subscribe({
      next: (data) => {
        this.cashbackPoints = data.amount;
      },
      error: (err) => {
        console.error('Failed to fetch cashback amount', err);
      }
    });
  }*/
  
}
offers = [
  {
    title: 'iPhone 14',
    description: 'Flat ₹5,000 off on select bank cards',
    image: 'assets/iphone.jpg'
  },
  {
    title: 'Nike Sneakers',
    description: 'Get 40% Off on sports shoes',
    image: 'assets/nike.jpg'
  },
  {
    title: 'Dosa 40%',
    description: 'Free delivery + 30% off on orders above ₹149',
    image: 'assets/images/Dosa.avif'
  }
];


promocodes = [
  {
    title: 'Save ₹50 on Food Orders',
    subtitle: 'Valid on orders above ₹149',
    code: 'FOOD50'
  },
  {
    title: '20% Off on Recharge',
    subtitle: 'Maximum ₹30 cashback',
    code: 'RECHARGE20'
  },
  {
    title: 'Free Delivery',
    subtitle: 'On first 3 orders',
    code: 'FREESHIP'
  }
];
alertMessage: string | null = null;

copyCode(code: string) {
  navigator.clipboard.writeText(code).then(() => {
    this.alertMessage = `Code "${code}" copied to clipboard!`;

    // Auto-hide alert after 3 seconds
    setTimeout(() => {
      this.alertMessage = null;
    }, 3000);
  });
}

closeAlert() {
  this.alertMessage = null;
}

shareReferral() {
  const shareData = {
    title: 'Join me on AwesomePay!',
    text: 'Earn cashback on every payment. Use my referral link to sign up!',
    url: 'https://yourapp.com/referral?code=ABCD1234'
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log('Referral shared successfully'))
      .catch((error) => console.error('Sharing failed:', error));
  } else {
    alert('Sharing is not supported on this browser. Please copy the link manually.');
  }
}

}
