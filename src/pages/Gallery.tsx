import { motion } from 'motion/react';
import { Play, Image as ImageIcon, Plus, Video } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Gallery() {
  const { content } = useContent();
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const filteredMedia = content.gallery.filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-brand-green py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-pitch-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-white italic uppercase mb-6">
            CLUB <span className="text-brand-gold">GALLERY</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto font-medium text-lg italic">
            Relive the action from the pitch. Matches, training, and community highlights.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 border-b border-slate-100 sticky top-[72px] bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex bg-slate-100 p-1.5 rounded-xl">
            {['all', 'photo', 'video'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={cn(
                  "px-8 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all",
                  filter === type 
                    ? "bg-brand-green text-white shadow-lg" 
                    : "text-slate-400 hover:text-brand-green"
                )}
              >
                {type}s
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">
             <ImageIcon className="w-4 h-4" />
             <span>{content.gallery.length} Media Items</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-video bg-slate-100 overflow-hidden rounded-[2rem] border border-slate-200 cursor-pointer"
              >
                {item.type === 'photo' ? (
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full relative">
                    <img 
                      src={`https://img.youtube.com/vi/${item.url.split('/').pop()?.split('?')[0]}/maxresdefault.jpg`} 
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-brand-green/40 transition-all flex items-center justify-center">
                       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-green shadow-xl transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-current" />
                       </div>
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-brand-gold font-black uppercase text-[10px] tracking-widest mb-1">{item.type}</span>
                  <h3 className="text-white font-black uppercase italic text-xl tracking-tight leading-none">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
