import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import React from 'react';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CTAButton({ 
  to, 
  children, 
  variant = 'primary', 
  className,
  size = 'md'
}: CTAButtonProps) {
  const variants = {
    primary: 'bg-brand-gold text-white hover:bg-opacity-90 shadow-xl',
    secondary: 'bg-brand-green text-white hover:bg-opacity-90 shadow-lg',
    outline: 'border border-white/30 text-white hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-2.5 text-xs',
    lg: 'px-8 py-4 text-sm'
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={to}
        className={cn(
          'inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
