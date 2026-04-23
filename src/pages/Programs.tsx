import { motion } from 'motion/react';
import { Calendar, User, CheckCircle2, ChevronRight, Trophy, Shield, Rocket } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';
import { cn } from '../lib/utils';
import { useContent } from '../context/ContentContext';

export default function Programs() {
  const { content } = useContent();
  const icons = [Rocket, Shield, Trophy];
  
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-green py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-green/90" />
          <img 
            src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1920&h=1080&auto=format&fit=crop" 
            alt="Soccer background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-black text-white italic uppercase mb-6"
          >
            Our <span className="text-brand-gold">Programs</span>
          </motion.h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto font-medium">
            From first steps to professional dreams, we have the right environment for every player's development.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {content.programs.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row items-stretch gap-12",
                  idx % 1 === 0 ? "" : "lg:flex-row-reverse"
                )}
              >
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-brand-gold/10 rounded-2xl text-brand-gold">
                        {(() => {
                           const Icon = icons[idx] || Shield;
                           return <Icon className="w-8 h-8" />;
                        })()}
                      </div>
                      <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Competitive Pathway</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-brand-green mb-4 italic uppercase leading-tight">
                      {p.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-700 font-bold text-sm">
                        <User className="w-4 h-4" />
                        <span>{p.age}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-2xl font-display font-black text-brand-green italic">{p.price}</div>
                      <CTAButton to="/register" className="w-full sm:w-auto">Register for {p.title}</CTAButton>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 relative min-h-[400px]">
                  <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${['1551958219-acbc608c6377', '1574629810360-7efbbe195018', '1543351611-58f69d7c1781'][idx % 3]}?q=80&w=1000&auto=format&fit=crop`}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-brand-green italic uppercase mb-4">The Club Advantage</h2>
            <p className="text-slate-500 font-medium">Why we are the preferred choice for Greenwich families.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Certification', desc: 'Every coach holds USSF/UEFA certifications and stays updated on modern methods.' },
              { title: 'Facilities', desc: 'Access to pristine grass and state-of-the-art turf fields in the heart of Greenwich.' },
              { title: 'Pathways', desc: 'Direct connections to regional elite leagues, show cases, and college recruiters.' }
            ].map((adv) => (
              <div key={adv.title} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <h3 className="font-display text-xl font-black text-brand-green italic uppercase mb-4">{adv.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
