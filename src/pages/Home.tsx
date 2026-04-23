import { motion } from 'motion/react';
import { Trophy, Users, Star, ArrowRight, Shield, CheckCircle2, Quote } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';
import { useContent } from '../context/ContentContext';

export default function Home() {
  const { content } = useContent();
  const stats = [
    { label: 'Years of Excellence', value: '25+', icon: Trophy },
    { label: 'Certified Coaches', value: '40+', icon: Shield },
    { label: 'Active Players', value: '1,200+', icon: Users },
    { label: 'Championships Won', value: '150+', icon: Star },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-[72px]">
        {/* Full Width Impact Area */}
        <div className="w-full bg-brand-green-dark relative flex flex-col justify-center px-6 md:px-16 py-32 overflow-hidden border-b-8 border-brand-green text-center">
          {/* Soccer Specific Patterns */}
          <div className="absolute inset-0 bg-pitch-pattern opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-field-lines opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="h-[2px] w-16 bg-white"></span>
                <span className="text-white font-black uppercase tracking-[0.4em] text-xs">GREENWICH SOCCER CLUB • SINCE 1998</span>
                <span className="h-[2px] w-16 bg-white"></span>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] mb-10 uppercase tracking-tighter italic">
                {content.hero.headline}
              </h1>
              
              <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium opacity-90">
                {content.hero.subheadline}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-20">
                <CTAButton to="/register" size="lg" className="bg-white text-brand-green hover:bg-brand-gold hover:text-brand-green px-12 py-6 text-lg">REGISTER FOR 2024</CTAButton>
                <CTAButton to="/programs" variant="outline" size="lg" className="border-2 border-white text-white px-12 py-6 text-lg">VIEW PROGRAMS</CTAButton>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/20">
                <div>
                  <div className="text-brand-gold font-black text-4xl">25</div>
                  <div className="text-white text-[10px] uppercase tracking-widest font-black mt-2">YEARS OF HISTORY</div>
                </div>
                <div>
                  <div className="text-brand-gold font-black text-4xl">15</div>
                  <div className="text-white text-[10px] uppercase tracking-widest font-black mt-2">STATE TITLES</div>
                </div>
                <div>
                  <div className="text-brand-gold font-black text-4xl">40+</div>
                  <div className="text-white text-[10px] uppercase tracking-widest font-black mt-2">EXPERT COACHES</div>
                </div>
                <div>
                  <div className="text-brand-gold font-black text-4xl">1.2K</div>
                  <div className="text-white text-[10px] uppercase tracking-widest font-black mt-2">ACTIVE PLAYERS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tactical Overview */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.programs.map((p, idx) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="bg-brand-green p-10 text-white border-b-8 border-brand-gold group cursor-pointer hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] font-black bg-white text-brand-green px-3 py-1 uppercase tracking-widest">{p.age}</span>
                    <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                  </div>
                  <h3 className="font-black uppercase tracking-tighter text-3xl mb-4 italic">GREENWICH <br/> {p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-10 font-medium">{p.desc}</p>
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-gold w-1/3 group-hover:w-full transition-all duration-1000" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold opacity-5 skew-x-12 transform translate-x-1/2" />
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/2">
                <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-8 uppercase italic leading-tight">
                  Why Families Choose <span className="text-brand-gold">Greenwich Soccer Club</span>
                </h2>
                <div className="space-y-6">
                  {[
                    "Professional USSF & UEFA Certified Coaching Staff",
                    "State-of-the-art facilities across Greenwich",
                    "Clear player development roadmap (5-18 years)",
                    "A community that values sportsmanship and character"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3 text-white/90">
                      <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                      <span className="font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="lg:w-1/2 grid grid-cols-1 gap-8">
                {testimonials.map((t, idx) => (
                  <motion.div 
                    key={t.author}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
                  >
                    <Quote className="w-10 h-10 text-brand-gold/50 mb-4" />
                    <p className="text-lg text-white/90 mb-6 italic italic font-medium leading-relaxed">
                      "{t.text}"
                    </p>
                    <div>
                      <div className="font-display font-bold text-brand-gold uppercase tracking-wider">{t.author}</div>
                      <div className="text-white/50 text-sm">{t.role}</div>
                    </div>
                  </motion.div>
                ))}
             </div>
           </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 shadow-xl"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-brand-green mb-8 uppercase italic leading-tight">
              Ready to take the <br /> 
              <span className="text-brand-gold">next step?</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl mb-12 font-medium">
              Join the most respected soccer program in Greenwich. Limited spots available for the upcoming season.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton to="/register" size="lg" className="px-16">Register Now</CTAButton>
              <CTAButton to="/contact" variant="outline" size="lg">Talk to a Coach</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
