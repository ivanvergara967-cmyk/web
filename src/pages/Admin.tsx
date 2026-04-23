import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Plus, Trash2, Layout, Image as ImageIcon, Type, DollarSign, Video, AlertCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { cn } from '../lib/utils';

export default function Admin() {
  const { content, updateContent, addMedia } = useContent();
  const [activeTab, setActiveTab] = useState<'info' | 'media' | 'programs'>('info');
  const [tempContent, setTempContent] = useState(content);
  const [newMedia, setNewMedia] = useState({ title: '', url: '', type: 'photo' as 'photo' | 'video' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSave = () => {
    updateContent(tempContent);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleMediaUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedia.title || !newMedia.url) return;
    addMedia({ ...newMedia, id: Date.now().toString() });
    setNewMedia({ title: '', url: '', type: 'photo' });
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-brand-green uppercase italic tracking-tight">Admin <span className="text-brand-gold">Dashboard</span></h1>
            <p className="text-slate-500 font-medium italic">Manage Greenwich Soccer Club website content in real-time.</p>
          </div>
          <button 
            onClick={handleSave}
            className="flex items-center space-x-3 bg-brand-green text-brand-gold px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all"
          >
            <Save className="w-5 h-5" />
            <span>{isSuccess ? 'Changes Saved!' : 'Save All Changes'}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-2">
            {[
              { id: 'info', label: 'Site Information', icon: Layout },
              { id: 'programs', label: 'Program Management', icon: DollarSign },
              { id: 'media', label: 'Gallery & Media', icon: ImageIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "w-full flex items-center space-x-4 p-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all",
                  activeTab === tab.id 
                    ? "bg-brand-green text-white shadow-xl" 
                    : "bg-white text-slate-400 hover:bg-slate-100"
                )}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
            
            <div className="mt-12 p-6 bg-brand-gold/10 rounded-[2rem] border border-brand-gold/20">
               <div className="flex items-start space-x-3 text-brand-green">
                  <AlertCircle className="w-5 h-5 mt-1 shrink-0" />
                  <p className="text-[10px] font-bold uppercase leading-relaxed tracking-wider">
                    Changes are strictly for the current browser session until connected to a permanent database.
                  </p>
               </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow space-y-8">
            {activeTab === 'info' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                  <div className="flex items-center space-x-3 mb-8">
                    <Type className="w-6 h-6 text-brand-gold" />
                    <h2 className="text-2xl font-black text-brand-green uppercase italic tracking-tight">Hero Content</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Main Headline</label>
                      <input 
                        type="text" 
                        value={tempContent.hero.headline}
                        onChange={(e) => setTempContent({...tempContent, hero: {...tempContent.hero, headline: e.target.value}})}
                        className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none font-black uppercase italic text-brand-green" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subheadline</label>
                      <textarea 
                        rows={4}
                        value={tempContent.hero.subheadline}
                        onChange={(e) => setTempContent({...tempContent, hero: {...tempContent.hero, subheadline: e.target.value}})}
                        className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none font-medium text-slate-600" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'programs' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {tempContent.programs.map((p, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                       <span className="text-[10px] font-black bg-brand-gold/10 text-brand-gold px-3 py-1 uppercase tracking-widest rounded-lg">Program {idx + 1}</span>
                       <button className="text-slate-200 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <input 
                         className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none font-bold text-brand-green"
                         value={p.title}
                         onChange={(e) => {
                           const newProgs = [...tempContent.programs];
                           newProgs[idx].title = e.target.value;
                           setTempContent({...tempContent, programs: newProgs});
                         }}
                         placeholder="Program Title"
                       />
                       <input 
                         className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none font-bold text-brand-green"
                         value={p.price}
                         onChange={(e) => {
                           const newProgs = [...tempContent.programs];
                           newProgs[idx].price = e.target.value;
                           setTempContent({...tempContent, programs: newProgs});
                         }}
                         placeholder="Registration Price"
                       />
                    </div>
                  </div>
                ))}
                <button className="w-full py-6 border-4 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-black uppercase tracking-widest text-xs hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center space-x-3">
                   <Plus className="w-6 h-6" />
                   <span>Add New Program Level</span>
                </button>
              </motion.div>
            )}

            {activeTab === 'media' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                {/* Upload Form */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                   <h2 className="text-2xl font-black text-brand-green uppercase italic tracking-tight mb-8 flex items-center">
                      <Plus className="w-8 h-8 text-brand-gold mr-3" />
                      Post New Media
                   </h2>
                   <form onSubmit={handleMediaUpload} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Title</label>
                           <input 
                             type="text" 
                             className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none"
                             placeholder="e.g. Finals Highlights"
                             value={newMedia.title}
                             onChange={(e) => setNewMedia({...newMedia, title: e.target.value})}
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Media Class</label>
                           <div className="flex bg-slate-50 p-1 rounded-xl">
                              {['photo', 'video'].map(t => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setNewMedia({...newMedia, type: t as any})}
                                  className={cn(
                                    "flex-grow py-3 rounded-lg text-[10px] font-black uppercase transition-all",
                                    newMedia.type === t ? "bg-white text-brand-green shadow-sm" : "text-slate-400"
                                  )}
                                >
                                  {t}
                                </button>
                              ))}
                           </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                           {newMedia.type === 'photo' ? 'Image URL (Unsplash or direct link)' : 'Video URL (Youtube Embedded Link)'}
                         </label>
                         <input 
                            type="text" 
                            className="w-full bg-slate-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-brand-gold outline-none"
                            placeholder={newMedia.type === 'photo' ? 'https://images.unsplash.com/...' : 'https://www.youtube.com/embed/...'}
                            value={newMedia.url}
                            onChange={(e) => setNewMedia({...newMedia, url: e.target.value})}
                         />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-brand-gold text-brand-green font-black py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-brand-green hover:text-white transition-all shadow-lg shadow-brand-gold/20"
                      >
                         Publish Media to Gallery
                      </button>
                   </form>
                </div>

                {/* Current Media List */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {tempContent.gallery.map((item) => (
                     <div key={item.id} className="aspect-video relative rounded-2xl overflow-hidden group border border-slate-100">
                        <img src={item.type === 'photo' ? item.url : `https://img.youtube.com/vi/${item.url.split('/').pop()?.split('?')[0]}/0.jpg`} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                           <span className="text-[8px] text-white font-black uppercase mb-1">{item.title}</span>
                           <button 
                             onClick={() => {
                               const newGallery = tempContent.gallery.filter(i => i.id !== item.id);
                               setTempContent({...tempContent, gallery: newGallery});
                             }}
                             className="p-2 bg-red-500 rounded-lg text-white hover:scale-110 transition-transform"
                           >
                             <Trash2 className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
