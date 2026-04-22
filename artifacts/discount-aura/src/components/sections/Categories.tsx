import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { ShoppingCart, Utensils, Smartphone, Shirt, Plane } from 'lucide-react';

const categories = [
  { name: 'Groceries', icon: ShoppingCart, count: '124 Deals', color: 'from-green-500/20 to-emerald-500/20', iconColor: 'text-emerald-400' },
  { name: 'Food Delivery', icon: Utensils, count: '89 Deals', color: 'from-orange-500/20 to-red-500/20', iconColor: 'text-orange-400' },
  { name: 'Electronics', icon: Smartphone, count: '245 Deals', color: 'from-blue-500/20 to-cyan-500/20', iconColor: 'text-blue-400' },
  { name: 'Fashion', icon: Shirt, count: '156 Deals', color: 'from-purple-500/20 to-pink-500/20', iconColor: 'text-purple-400' },
  { name: 'Travel', icon: Plane, count: '67 Deals', color: 'from-cyan-500/20 to-teal-500/20', iconColor: 'text-cyan-400' },
];

export function Categories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-white/50 text-sm md:text-base">Find specific deals for your favorite stores.</p>
          </div>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors hidden sm:block">
            View All Categories →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <GlassCard 
              key={index}
              interactive 
              className="p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${cat.color} border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cat.icon className={`w-6 h-6 ${cat.iconColor}`} />
              </div>
              <h3 className="font-semibold text-white/90 mb-1">{cat.name}</h3>
              <p className="text-xs font-medium text-white/40">{cat.count}</p>
            </GlassCard>
          ))}
        </div>

        <button className="w-full mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors sm:hidden">
          View All Categories →
        </button>

      </div>
    </section>
  );
}
