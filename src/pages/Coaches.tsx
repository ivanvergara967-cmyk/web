import { motion } from 'motion/react';
import { Mail, GraduationCap, Award, ShieldCheck, MailIcon } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';

const coaches = [
  {
    name: 'Henrique Silva',
    role: 'Technical Director',
    license: 'UEFA Pro License',
    experience: '15+ Years Pro Coaching',
    philosophy: 'Technical creativity combined with high-intensity spatial awareness.',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=400&h=500&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thompson',
    role: 'Academy Director',
    license: 'USSF A License',
    experience: '10+ Years Youth Development',
    philosophy: 'Building character through tactical discipline and game intelligence.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop'
  },
  {
    name: 'Elena Rossi',
    role: 'Girls Premier Director',
    license: 'UEFA A License',
    experience: 'Former Pro Player (Serie A Femminile)',
    philosophy: 'Empowering young women through competitive grit and technical precision.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=500&auto=format&fit=crop'
  },
  {
    name: 'David Beck',
    role: 'Youth Development Spec.',
    license: 'USSF C License',
    experience: 'Focus on Ages 5-10',
    philosophy: 'Laying the foundation of love for the ball and fundamental mastery.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop'
  }
];

export default function Coaches() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-black text-brand-green italic uppercase mb-6">
              Elite <span className="text-brand-gold">Leadership</span>
            </h1>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto font-medium leading-relaxed italic">
              "We don't just coach players; we mentor athletes. Our staff brings professional standards to youth development."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification Trust Bar */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
           <div className="flex items-center space-x-2 grayscale">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span className="font-black italic uppercase text-xs tracking-widest text-brand-green">USSF Licensed</span>
           </div>
           <div className="flex items-center space-x-2 grayscale">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span className="font-black italic uppercase text-xs tracking-widest text-brand-green">UEFA Certified</span>
           </div>
           <div className="flex items-center space-x-2 grayscale">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span className="font-black italic uppercase text-xs tracking-widest text-brand-green">SafeSport Qualified</span>
           </div>
           <div className="flex items-center space-x-2 grayscale">
              <ShieldCheck className="w-5 h-5 text-brand-green" />
              <span className="font-black italic uppercase text-xs tracking-widest text-brand-green">CPR/First Aid</span>
           </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {coaches.map((coach, idx) => (
              <motion.div 
                key={coach.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-6">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl shadow-brand-green/5">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                       <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-brand-gold hover:text-brand-green transition-all">
                          <MailIcon className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-brand-gold text-brand-green p-4 rounded-2xl font-black italic text-xs uppercase tracking-tighter shadow-xl transform group-hover:rotate-6 transition-transform">
                     {coach.license}
                  </div>
                </div>
                
                <h3 className="font-display text-2xl font-black text-brand-green italic uppercase group-hover:text-brand-gold transition-colors">{coach.name}</h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">{coach.role}</p>
                
                <div className="space-y-3">
                   <div className="flex items-start space-x-2 text-sm text-slate-600 font-medium italic leading-relaxed">
                     <p>"{coach.philosophy}"</p>
                   </div>
                   <div className="flex items-center space-x-2 text-brand-green/40">
                      <div className="h-px w-8 bg-current" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{coach.experience}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Banner */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase italic mb-8">
              Join Our <span className="text-brand-gold">Staff</span>
           </h2>
           <p className="text-white/60 max-w-2xl mx-auto mb-12 font-medium">
             We are always looking for passionate, certified coaches who believe in the player-first development model. Professional growth and community impact await.
           </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <CTAButton to="/contact" variant="outline">Submit Application</CTAButton>
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800">
                       <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" className="w-full h-full grayscale" />
                    </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-brand-gold text-brand-green flex items-center justify-center font-black text-xs">+12</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
