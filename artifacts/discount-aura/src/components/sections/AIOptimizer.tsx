import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Sparkles, Calculator, IndianRupee, Tag, CreditCard, Wallet, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AIOptimizer() {
  const [cartValue, setCartValue] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{ coupon: number, bank: number, wallet: number, total: number } | null>(null);

  const handleCalculate = () => {
    if (!cartValue || isNaN(Number(cartValue))) return;
    
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      const val = Number(cartValue);
      const couponDiscount = Math.round(val * 0.15);
      const bankOffer = Math.round(val * 0.05);
      const walletCashback = Math.round(val * 0.03);
      
      setResult({
        coupon: couponDiscount,
        bank: bankOffer,
        wallet: walletCashback,
        total: couponDiscount + bankOffer + walletCashback
      });
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See the AI Optimizer in Action</h2>
            <p className="text-white/60">Enter a mock cart value to see how DiscountAura stacks your savings.</p>
          </div>

          <GlassCard className="p-6 md:p-10 relative overflow-hidden">
            {/* Ambient glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6">
              
              <div className="flex-1 space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Cart Value (₹)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <IndianRupee className="h-5 w-5 text-white/40" />
                    </div>
                    <input
                      type="number"
                      value={cartValue}
                      onChange={(e) => setCartValue(e.target.value)}
                      placeholder="e.g. 5000"
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-lg text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-shadow font-medium"
                    />
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!cartValue || isCalculating}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {isCalculating ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Calculator className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Find Best Deal
                    </>
                  )}
                </button>
              </div>

              <div className="flex-1 bg-black/30 rounded-xl p-6 border border-white/5 relative z-10 flex flex-col justify-center min-h-[240px]">
                <AnimatePresence mode="wait">
                  {isCalculating ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-full space-y-4"
                    >
                      <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                      <div className="text-sm font-medium text-emerald-400 animate-pulse">Running AI stacking logic...</div>
                    </motion.div>
                  ) : result ? (
                    <motion.div 
                      key="result"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="text-center mb-6">
                        <div className="text-sm font-medium text-white/50 mb-1">Best Savings</div>
                        <div className="text-4xl md:text-5xl font-bold text-emerald-400">₹{result.total.toLocaleString()}</div>
                      </div>
                      
                      <div className="space-y-3">
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex justify-between items-center text-sm p-2 rounded-lg bg-white/5 border border-white/5">
                          <div className="flex items-center gap-2 text-white/80"><Tag className="w-4 h-4 text-primary" /> Coupon (15%)</div>
                          <div className="font-semibold">₹{result.coupon.toLocaleString()}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex justify-between items-center text-sm p-2 rounded-lg bg-white/5 border border-white/5">
                          <div className="flex items-center gap-2 text-white/80"><CreditCard className="w-4 h-4 text-blue-400" /> Bank Offer (5%)</div>
                          <div className="font-semibold">₹{result.bank.toLocaleString()}</div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex justify-between items-center text-sm p-2 rounded-lg bg-white/5 border border-white/5">
                          <div className="flex items-center gap-2 text-white/80"><Wallet className="w-4 h-4 text-purple-400" /> Wallet Cashback (3%)</div>
                          <div className="font-semibold">₹{result.wallet.toLocaleString()}</div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="empty"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="text-center text-white/30 h-full flex flex-col items-center justify-center"
                    >
                      <Calculator className="w-10 h-10 mb-3 opacity-20" />
                      <p>Enter an amount to calculate potential savings.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </GlassCard>

          {/* AI Insight Callout */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-emerald-400/80 bg-emerald-500/10 py-2 px-4 rounded-full w-max mx-auto border border-emerald-500/20">
            <Sparkles className="w-4 h-4" />
            <span>AI automatically identifies combinable offers to maximize ROI.</span>
          </div>

        </div>
      </div>
    </section>
  );
}
