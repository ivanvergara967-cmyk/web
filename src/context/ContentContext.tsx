import React, { createContext, useContext, useState, useEffect } from 'react';

interface Program {
  title: string;
  age: string;
  desc: string;
  price: string;
}

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  title: string;
}

interface SiteContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  programs: Program[];
  gallery: MediaItem[];
}

const defaultContent: SiteContent = {
  hero: {
    headline: "THE BEAUTIFUL GAME STARTS HERE.",
    subheadline: "Elite development and competitive football for the youth of Greenwich, Connecticut.",
  },
  programs: [
    { title: 'Youth Development', age: 'Ages 5-8', desc: 'Fundamental motor skills, ball control, and fun.', price: '$650' },
    { title: 'Academy Program', age: 'Ages 9-12', desc: 'Technical refinement and introduction to tactical positioning.', price: '$950' },
    { title: 'Competitive Teams', age: 'Ages 13-18', desc: 'Elite competitive play with college showcase opportunities.', price: '$1,450' },
  ],
  gallery: [
    { id: '1', type: 'photo', url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800', title: 'U10 Training Session' },
    { id: '2', type: 'photo', url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800', title: 'Academy Match Day' },
    { id: '3', type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Tournament Highlights' },
  ]
};

const ContentContext = createContext<{
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  addMedia: (item: MediaItem) => void;
} | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('gsc_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('gsc_content', JSON.stringify(newContent));
  };

  const addMedia = (item: MediaItem) => {
    const newContent = { ...content, gallery: [item, ...content.gallery] };
    updateContent(newContent);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, addMedia }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
}
