import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Globe, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-brand-green py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <h1 className="font-display text-5xl md:text-7xl font-black italic uppercase mb-4">Contact <span className="text-brand-gold">Us</span></h1>
             <p className="text-white/60 font-medium uppercase tracking-widest text-xs">Have questions? Our team is here to help.</p>
           </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 pb-24">
         <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info Cards */}
            <div className="lg:w-1/3 space-y-6">
               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                  <div className="p-3 bg-brand-gold/10 rounded-2xl text-brand-gold inline-block mb-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-black text-brand-green italic uppercase mb-2">Email Us</h3>
                  <p className="text-slate-500 font-medium mb-4 text-sm italic">General inquiries & program info.</p>
                  <a href="mailto:info@greenwichsoccer.com" className="text-brand-green font-black tracking-wider text-sm hover:text-brand-gold transition-colors">info@greenwichsoccer.com</a>
               </div>

               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                  <div className="p-3 bg-brand-gold/10 rounded-2xl text-brand-gold inline-block mb-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-black text-brand-green italic uppercase mb-2">Call Us</h3>
                  <p className="text-slate-500 font-medium mb-4 text-sm italic">Member support & club logistics.</p>
                  <a href="tel:2035550123" className="text-brand-green font-black tracking-wider text-sm hover:text-brand-gold transition-colors">(203) 555-0123</a>
               </div>

               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                  <div className="p-3 bg-brand-gold/10 rounded-2xl text-brand-gold inline-block mb-6">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-black text-brand-green italic uppercase mb-2">Social Hub</h3>
                  <p className="text-slate-500 font-medium mb-6 text-sm italic">Follow our training sessions & news.</p>
                  <div className="flex space-x-4">
                     <a href="#" className="p-3 bg-slate-900 rounded-xl text-white hover:bg-brand-green hover:text-brand-gold transition-all"><Instagram className="w-5 h-5" /></a>
                     <a href="#" className="p-3 bg-slate-900 rounded-xl text-white hover:bg-brand-green hover:text-brand-gold transition-all"><Facebook className="w-5 h-5" /></a>
                     <a href="#" className="p-3 bg-slate-900 rounded-xl text-white hover:bg-brand-green hover:text-brand-gold transition-all"><Globe className="w-5 h-5" /></a>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="flex-grow">
               <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100">
                  <h2 className="font-display text-4xl font-black text-brand-green italic uppercase mb-10">Send a Message</h2>
                  <form className="space-y-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                           <input type="text" className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none font-medium text-slate-700" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                           <input type="email" className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none font-medium text-slate-700" placeholder="john@example.com" />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Select Topic</label>
                        <select className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none font-medium text-slate-700 appearance-none">
                           <option>General Inquiry</option>
                           <option>Youth Development (Ages 5-8)</option>
                           <option>Academy (Ages 9-12)</option>
                           <option>Competitive Teams (Ages 13-18)</option>
                           <option>Coaching Application</option>
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                        <textarea rows={6} className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-brand-gold outline-none font-medium text-slate-700 resize-none" placeholder="Tell us how we can help..."></textarea>
                     </div>

                     <button className="w-full bg-brand-green text-brand-gold font-black py-6 rounded-2xl flex items-center justify-center space-x-3 hover:bg-brand-gold hover:text-brand-green transition-all shadow-xl shadow-brand-green/10 uppercase tracking-widest text-xs">
                        <Send className="w-5 h-5" />
                        <span>Send Transmission</span>
                     </button>
                  </form>
               </div>
            </div>
         </div>
         
         {/* Location Detail */}
         <div className="mt-16 bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
               <div className="w-20 h-20 bg-brand-gold/10 rounded-[2rem] flex items-center justify-center text-brand-gold">
                  <MapPin className="w-10 h-10" />
               </div>
               <div>
                  <h3 className="font-display font-black text-2xl text-brand-green italic uppercase">Visit Our Office</h3>
                  <p className="text-slate-500 font-medium italic">123 Soccer Way, Greenwich, CT 06830</p>
               </div>
            </div>
            <a href="#" className="font-display font-black text-brand-green underline decoration-brand-gold decoration-4 underline-offset-8 italic uppercase hover:text-brand-gold transition-colors">Get Directions</a>
         </div>
      </section>
    </div>
  );
}
