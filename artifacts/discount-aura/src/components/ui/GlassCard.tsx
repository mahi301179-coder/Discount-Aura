import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function GlassCard({ children, className, interactive = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl relative overflow-hidden',
        interactive && 'hover-scale glow-border cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
