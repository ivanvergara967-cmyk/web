import { motion } from 'motion/react';
import { Target, Users, Shield, Trophy, CheckCircle2, History } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';

export default function AboutUs() {
  const values = [
    { title: 'Player First', desc: 'Every decision we make is centered on the safety, development, and success of our players.', icon: Users },
    { title: 'Integrity', desc: 'We compete with honor, upholding the highest standards of sportsmanship on and off the pitch.', icon: Shield },
    { title: 'Excellence', desc: 'From coaching to facilities, we strive for a professional standard in everything we do.', icon: Trophy },
    { title: 'Community', desc: 'We are more than a club; we are a family representing the pride of Greenwich.', icon: Target },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-brand-green py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-pitch-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-field-lines opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white p-12 md:p-24 flex flex-col items-center text-center relative border-b-8 border-brand-green">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-[2px] w-12 bg-brand-green"></span>
                <span className="text-brand-green font-black uppercase tracking-[0.4em] text-xs">GREENWICH SOCCER CLUB</span>
                <span className="h-[2px] w-12 bg-brand-green"></span>
              </div>
              <h1 className="font-display text-5xl md:text-8xl font-black text-brand-green uppercase tracking-tighter leading-[0.8] mb-12 italic">
                A TRADITION OF <br />
                <span className="text-brand-green/30 text-stroke-green">EXCELLENCE.</span>
              </h1>
              <p className="text-slate-600 text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                Leading the way in youth football for Greenwich, CT with a commitment to pure skill, character, and the beautiful game.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <CTAButton to="/programs" size="lg">Explore Programs</CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative bg-white p-4 border border-slate-200">
               <div className="aspect-square bg-slate-100 overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=800&h=800&auto=format&fit=crop" 
                   alt="Soccer field in Greenwich"
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-brand-green p-8 text-white border-l-4 border-brand-gold">
                  <div className="font-black text-4xl italic leading-none mb-1">25+</div>
                  <div className="font-bold uppercase tracking-widest text-[10px] text-slate-400">Years serving<br/>Greenwich</div>
               </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-brand-green uppercase tracking-tighter mb-8 leading-[0.9]">
                DEVELOPING <span className="text-brand-gold">LEADERS</span> <br /> 
                ON AND OFF THE PITCH.
              </h2>
              <div className="space-y-8 text-slate-500 font-light leading-relaxed text-lg">
                <p>
                  Our curriculum is designed by elite technical directors to challenge players both physically and mentally. We don't just coach soccer; we mentor young athletes to become the best versions of themselves.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-4">
                   <div className="border-l-2 border-slate-100 pl-6">
                     <div className="text-brand-green font-black text-4xl">98%</div>
                     <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-2">Parent Satisfaction</p>
                   </div>
                   <div className="border-l-2 border-slate-100 pl-6">
                     <div className="text-brand-green font-black text-4xl">120+</div>
                     <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-2">College Alumni</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-green text-white relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, idx) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-10 border border-white/10 hover:border-white/20 transition-all"
              >
                <h3 className="font-black text-xl uppercase tracking-tight mb-4">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-12 md:p-20 relative z-10">
                 <h2 className="font-display text-4xl md:text-6xl font-black text-white italic uppercase mb-6 leading-tight">
                    Be Part of the <span className="text-brand-gold">Pride.</span>
                 </h2>
                 <p className="text-white/70 text-lg mb-10 font-medium">
                    Whether you are an aspiring pro or just starting out, there is a place for you in the Greenwich family.
                 </p>
                 <CTAButton to="/register">Join the Legacy</CTAButton>
              </div>
              <div className="md:w-1/2 h-full min-h-[400px]">
                 <img 
                    src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&w=800&auto=format&fit=crop" 
                    alt="Soccer community"
                    className="w-full h-full object-cover"
                 />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
