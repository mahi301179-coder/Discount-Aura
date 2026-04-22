import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { IndianRupee, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

export function DashboardPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Every Rupee Saved</h2>
          <p className="text-white/60 text-lg">
            A beautiful dashboard to monitor your total savings, track your subscription ROI, and view history.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 md:p-10 border-white/20 shadow-2xl relative">
            
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-white/10">
              
              <div className="space-y-1">
                <div className="text-sm font-medium text-white/50 flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> This Year
                </div>
                <div className="text-5xl font-bold text-emerald-400 tracking-tight">
                  ₹14,250
                </div>
                <div className="text-sm font-medium text-emerald-400/70 flex items-center gap-1 mt-2">
                  <TrendingUp className="w-4 h-4" /> +12% from last year
                </div>
              </div>

              <div className="flex gap-6">
                <div className="space-y-1 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-medium text-white/50">Subscription</div>
                  <div className="text-xl font-semibold text-white/80">₹200<span className="text-sm text-white/40">/mo</span></div>
                </div>
                <div className="space-y-1 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="text-xs font-medium text-primary/70">Net Gain</div>
                  <div className="text-xl font-bold text-primary">₹14,050</div>
                </div>
              </div>

            </div>

            {/* List */}
            <div>
              <div className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">Recent Savings</div>
              <div className="space-y-3">
                {[
                  { initial: "SW", name: "Swiggy", amount: 180, time: "2 days ago", color: "bg-orange-500" },
                  { initial: "FK", name: "Flipkart", amount: 750, time: "4 days ago", color: "bg-blue-500" },
                  { initial: "ZO", name: "Zomato", amount: 200, time: "5 days ago", color: "bg-red-500" },
                  { initial: "AZ", name: "Amazon", amount: 1200, time: "1 week ago", color: "bg-gray-800 border border-white/20" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${item.color}`}>
                        {item.initial}
                      </div>
                      <div>
                        <div className="font-semibold text-white/90">{item.name}</div>
                        <div className="text-xs text-white/40">{item.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-semibold text-emerald-400">+₹{item.amount}</div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
}
