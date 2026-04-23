import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Search, ChevronRight } from 'lucide-react';
import CTAButton from '../components/common/CTAButton';

const sessions = [
  { program: 'Youth U6-U8', days: 'Tuesday & Thursday', time: '4:00 PM - 5:15 PM', location: 'Greenwich Common' },
  { program: 'Youth U9-U10', days: 'Monday & Wednesday', time: '4:00 PM - 5:30 PM', location: 'Loughlin Park' },
  { program: 'Academy U11-U12', days: 'Mon, Wed, Fri', time: '5:30 PM - 7:00 PM', location: 'Loughlin Park' },
  { program: 'Premier U13-U15', days: 'Tue, Wed, Thu, Fri', time: '6:00 PM - 7:45 PM', location: 'Greenwich Central' },
  { program: 'Elite U16-U18', days: 'Mon, Tue, Thu, Fri', time: '7:00 PM - 8:45 PM', location: 'Greenwich High Stadium' },
];

export default function Schedule() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-green py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
           >
             <h1 className="font-display text-5xl md:text-7xl font-black text-white italic uppercase mb-4">Training <span className="text-brand-gold">Schedule</span></h1>
             <p className="text-white/60 font-medium uppercase tracking-widest text-xs">Fall 2024 Season | Greenwich, CT</p>
           </motion.div>
        </div>
      </section>

      {/* Filter / Search Bar (Visual Only) */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 flex flex-col md:flex-row gap-6">
           <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by age group or location..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-gold outline-none text-slate-700 font-medium"
              />
           </div>
           <div className="flex gap-4">
             <button className="bg-brand-gold text-brand-green px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-brand-gold/20">All Programs</button>
             <button className="bg-white text-slate-400 border border-slate-100 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:border-brand-gold transition-all">Matches Only</button>
           </div>
        </div>
      </section>

      {/* Schedule List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-4">
            <div className="hidden lg:grid grid-cols-4 py-4 px-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
               <div>Program / Age Group</div>
               <div>Training Days</div>
               <div>Session Time</div>
               <div>Facility Location</div>
            </div>
            
            {sessions.map((s, idx) => (
              <motion.div 
                key={s.program}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-4 items-center bg-slate-50 hover:bg-white hover:shadow-xl transition-all p-8 lg:px-10 rounded-[2rem] border border-slate-100 gap-6 lg:gap-0"
              >
                <div>
                  <div className="font-display text-xl font-black text-brand-green italic uppercase">{s.program}</div>
                  <div className="lg:hidden mt-1 text-[10px] font-black text-brand-gold uppercase tracking-widest">Active Season</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-brand-gold" />
                  <span className="font-bold text-slate-600 text-sm">{s.days}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <span className="font-bold text-slate-600 text-sm">{s.time}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                    <span className="font-bold text-slate-600 text-sm">{s.location}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-brand-green/5 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-green/10">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                   <Clock className="w-8 h-8 text-brand-green" />
                </div>
                <div>
                   <h3 className="font-display font-black text-brand-green uppercase italic text-xl">Download PDF Schedule</h3>
                   <p className="text-slate-500 font-medium text-sm italic">Get a printable version of all age group training times.</p>
                </div>
             </div>
             <button className="bg-brand-green text-brand-gold px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-green transition-all shadow-xl shadow-brand-green/10">
                Download Schedule
             </button>
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="font-display text-4xl font-black text-brand-green italic uppercase mb-4">Our Facilities</h2>
               <p className="text-slate-500 font-medium italic">Professional-grade fields across Greenwich, CT.</p>
            </div>
            
            <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-200">
               <div className="bg-slate-100 rounded-[2.5rem] h-[400px] flex items-center justify-center text-slate-400 font-black italic uppercase tracking-widest group cursor-pointer overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="relative z-10 flex flex-col items-center">
                    <MapPin className="w-12 h-12 mb-4 text-brand-gold animate-bounce" />
                    Interactive Map Loading...
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
