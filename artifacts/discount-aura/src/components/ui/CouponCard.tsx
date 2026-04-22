import React from 'react';
import { GlassCard } from './GlassCard';
import { Copy, CheckCircle, Tag, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export interface CouponData {
  id: string;
  code: string;
  description: string;
  store: string;
  verified: boolean;
  lastChecked: string;
  locked?: boolean;
}

interface CouponCardProps {
  coupon: CouponData;
  className?: string;
}

export function CouponCard({ coupon, className }: CouponCardProps) {
  const handleCopy = () => {
    if (coupon.locked) return;
    navigator.clipboard.writeText(coupon.code);
    toast.success(`Copied ${coupon.code} to clipboard!`, {
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />
    });
  };

  return (
    <GlassCard className={cn('p-5 flex flex-col justify-between h-full group', className, coupon.locked && 'opacity-80 backdrop-blur-3xl grayscale')} interactive={!coupon.locked}>
      {coupon.locked && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold flex items-center gap-2">
            Premium Deal
          </div>
        </div>
      )}
      
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="font-bold text-lg text-white/90">{coupon.store}</div>
          {coupon.verified && (
            <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/20">
              <CheckCircle className="w-3 h-3" />
              Verified
            </div>
          )}
        </div>
        
        <p className="text-sm text-white/70 mb-6 leading-relaxed">
          {coupon.description}
        </p>
      </div>

      <div className="space-y-3 mt-auto">
        <button
          onClick={handleCopy}
          disabled={coupon.locked}
          className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 border-dashed rounded-xl px-4 py-3 transition-colors"
        >
          <span className="font-mono font-bold tracking-wider text-primary">
            {coupon.locked ? '••••••••' : coupon.code}
          </span>
          <Copy className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors" />
        </button>
        
        <div className="flex items-center gap-1 text-xs text-white/40">
          <Clock className="w-3 h-3" />
          Last checked {coupon.lastChecked}
        </div>
      </div>
    </GlassCard>
  );
}
