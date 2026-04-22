import React from 'react';
import { CouponCard, type CouponData } from '../ui/CouponCard';
import { TrendingUp } from 'lucide-react';

const mockCoupons: CouponData[] = [
  {
    id: "1",
    store: "Swiggy",
    code: "SWIGGY50",
    description: "50% off up to ₹100 on your next food order.",
    verified: true,
    lastChecked: "2h"
  },
  {
    id: "2",
    store: "Flipkart",
    code: "HDFC15",
    description: "15% cashback up to ₹500 with HDFC credit cards.",
    verified: true,
    lastChecked: "5h"
  },
  {
    id: "3",
    store: "Zomato",
    code: "ZOMATO200",
    description: "Flat ₹200 off on orders above ₹399.",
    verified: true,
    lastChecked: "1h"
  },
  {
    id: "4",
    store: "Amazon",
    code: "AMZNPRIME",
    description: "Extra 10% off on all electronics + Prime delivery.",
    verified: true,
    lastChecked: "3h"
  },
  {
    id: "5",
    store: "Myntra",
    code: "MYNTRA30",
    description: "30% off on fashion + extra 10% with SBI card.",
    verified: true,
    lastChecked: "6h"
  },
  {
    id: "6",
    store: "Paytm",
    code: "PAYTM100",
    description: "₹100 cashback on recharges above ₹300 via Paytm UPI.",
    verified: true,
    lastChecked: "4h"
  }
];

export function TrendingCoupons() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Trending Right Now</h2>
            <p className="text-white/50 mt-1">The most stacked coupons across India today.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>

      </div>
    </section>
  );
}
