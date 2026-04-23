import { Link } from 'react-router-dom';
import { Trophy, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-gold p-1.5 rounded-lg">
                <Trophy className="w-6 h-6 text-brand-green" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight uppercase">
                Greenwich <span className="text-brand-gold">Soccer</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Greenwich Soccer Club is dedicated to providing elite-level training and competitive matches for 
              youth players in Connecticut. Our focus is on character, community, and the love of the game.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-green hover:text-brand-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-green hover:text-brand-gold transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-brand-green hover:text-brand-gold transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-brand-gold">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Programs', 'About Us', 'Coaches', 'Schedule', 'Register Now'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Register Now' ? '/register' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-brand-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Greenwich, CT 06830, USA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>(203) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>info@greenwichsoccer.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 uppercase tracking-wider text-brand-gold">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for program updates and news.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-gold text-white"
              />
              <button className="bg-brand-green text-brand-gold font-bold py-3 rounded-lg hover:bg-brand-gold hover:text-brand-green transition-all uppercase text-xs tracking-widest">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2024 Greenwich Soccer Club. All rights reserved. Professional Youth Soccer in CT.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
