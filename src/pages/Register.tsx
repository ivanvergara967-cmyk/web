import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, UserPlus, FileText, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Register() {
  const [step, setStep] = useState(1);

  const steps = [
    { number: 1, label: 'Program', icon: UserPlus },
    { number: 2, label: 'Player Info', icon: FileText },
    { number: 3, label: 'Parent Info', icon: ShieldCheck },
    { number: 4, label: 'Payment', icon: CreditCard },
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-black text-brand-green italic uppercase mb-4">Start Your Journey</h1>
          <p className="text-slate-500 font-medium">Secure your spot for the upcoming season in 3 minutes.</p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute h-0.5 bg-slate-200 top-1/2 left-0 right-0 -translate-y-1/2 z-0" />
          {steps.map((s) => (
            <div key={s.number} className="relative z-10 flex flex-col items-center">
              <div 
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-4",
                  step >= s.number 
                    ? "bg-brand-gold border-brand-gold text-brand-green" 
                    : "bg-white border-slate-200 text-slate-400"
                )}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <span className={cn(
                "mt-2 text-[10px] uppercase tracking-widest font-black",
                step >= s.number ? "text-brand-green" : "text-slate-400"
              )}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-slate-100"
        >
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-black text-brand-green italic uppercase">Select Your Program</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: 'youth', title: 'Youth Development', age: 'Ages 5-8', price: '$650' },
                  { id: 'academy', title: 'Academy Training', age: 'Ages 9-12', price: '$950' },
                  { id: 'comp', title: 'Competitive Teams', age: 'Ages 13-18', price: '$1,450' },
                ].map((p) => (
                  <button 
                    key={p.id}
                    onClick={() => setStep(2)}
                    className="flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 hover:border-brand-gold hover:bg-brand-gold/5 transition-all group text-left"
                  >
                    <div>
                      <div className="font-bold text-brand-green group-hover:text-brand-gold transition-colors">{p.title}</div>
                      <div className="text-slate-500 text-sm">{p.age}</div>
                    </div>
                    <div className="font-display font-black text-brand-green italic">{p.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-black text-brand-green italic uppercase text-brand-green">Player Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 ml-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 ml-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold" />
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 ml-1">Date of Birth</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold" />
                </div>
              </div>
              <button 
                onClick={() => setStep(3)}
                className="w-full mt-8 bg-brand-green text-brand-gold font-black py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-brand-green/90 transition-all uppercase tracking-widest text-sm"
              >
                <span>Continue</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-black text-brand-green italic uppercase text-brand-green">Parent Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 ml-1">Parent/Guardian Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold" />
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-gold" />
                </div>
              </div>
              <button 
                onClick={() => setStep(4)}
                className="w-full mt-8 bg-brand-green text-brand-gold font-black py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-brand-green/90 transition-all uppercase tracking-widest text-sm"
              >
                <span>Proceed to Payment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8 space-y-8">
              <div className="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto text-brand-accent">
                <CreditCard className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-black text-brand-green italic uppercase mb-2">Final Step</h2>
                <p className="text-slate-500">Secure payment via our encrypted gateway.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex justify-between items-center">
                 <span className="font-bold text-slate-700">Total Enrollment Fee</span>
                 <span className="font-display font-black text-2xl text-brand-green italic">$950.00</span>
              </div>
              <button 
                className="w-full bg-brand-gold text-brand-green font-black py-5 rounded-xl flex items-center justify-center space-x-2 hover:bg-white transition-all uppercase tracking-widest shadow-lg shadow-brand-gold/20"
              >
                Complete Registration
              </button>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Secure 256-bit SSL Protected</p>
            </div>
          )}
        </motion.div>
        
        <div className="mt-8 flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase">
             <ShieldCheck className="w-4 h-4" />
             <span>Verified Secure</span>
          </div>
          <div className="w-px h-4 bg-slate-200" />
          <div className="flex items-center space-x-2 text-slate-400 text-xs font-bold uppercase">
             <span>Greenwich, CT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
