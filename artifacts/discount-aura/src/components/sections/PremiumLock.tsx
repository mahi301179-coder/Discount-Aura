import React from 'react';
import { CouponCard, type CouponData } from '../ui/CouponCard';
import { Lock, Sparkles } from 'lucide-react';

const premiumCoupons: CouponData[] = [
  {
    id: "p1",
    store: "Myntra",
    code: "FLASH60",
    description: "60% off limited time on top brands.",
    verified: true,
    lastChecked: "1m",
    locked: true
  },
  {
    id: "p2",
    store: "MakeMyTrip",
    code: "ICICI20",
    description: "20% cashback via ICICI on domestic flights.",
    verified: true,
    lastChecked: "10m",
    locked: true
  },
  {
    id: "p3",
    store: "Nykaa",
    code: "NYKAA40",
    description: "40% off on premium beauty brands.",
    verified: true,
    lastChecked: "5m",
    locked: true
  }
];

export function PremiumLock() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 border-y border-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Unlock the Vault</h2>
          <p className="text-lg text-white/60 mb-8">
            Get exclusive access to high-value flash sales, hidden bank offers, and stacked combos that aren't public.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] active:scale-95 flex items-center justify-center gap-2 mx-auto">
            <Sparkles className="w-5 h-5" />
            Subscribe ₹200/month
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
          {premiumCoupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>

      </div>
    </section>
  );
}
