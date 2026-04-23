import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-200'
          : 'bg-white py-5 border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center text-slate-700">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-green w-10 h-10 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tighter text-brand-green leading-none uppercase">
                GREENWICH
              </span>
              <span className="text-[10px] font-black text-brand-green tracking-[0.2em] leading-none uppercase">
                SOCCER CLUB
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-[13px] font-bold uppercase tracking-wider transition-colors',
                  location.pathname === link.href ? 'text-brand-gold underline underline-offset-4 decoration-2' : 'text-slate-600 hover:text-brand-green'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="bg-brand-gold text-white px-6 py-2.5 font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all shadow-sm"
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-green border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-4 text-base font-bold text-white hover:text-brand-gold hover:bg-white/5 rounded-md transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/register"
                className="block w-full text-center bg-brand-gold text-brand-green px-3 py-4 rounded-md font-extrabold uppercase tracking-widest mt-4"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
