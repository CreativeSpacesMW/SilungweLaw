
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Menu, X, ChevronRight, Globe, 
  MapPin, Clock, Phone, Mail
} from 'lucide-react';
import Home from './views/HomeContent';
import About from './views/AboutContent';
import PracticeAreas from './views/PracticeAreasContent';
import Team from './views/TeamContent';
import Litigation from './views/LitigationContent';
import GlobalCSR from './views/GlobalCSRContent';
import Contact from './views/ContactContent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Team', path: '/team' },
    { name: 'Litigation', path: '/litigation' },
    { name: 'Global & CSR', path: '/global-csr' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-xl py-2 border-b border-slate-800/50 shadow-2xl' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-900 border border-slc-gold flex items-center justify-center transform rotate-45 shrink-0 transition-all group-hover:rotate-0">
                <span className="text-slc-gold font-serif font-bold text-lg md:text-xl -rotate-45 group-hover:rotate-0 transition-transform">S</span>
              </div>
              <div className="ml-1 md:ml-2">
                <span className="block text-lg md:text-xl font-serif font-bold tracking-tight leading-none text-white group-hover:text-slc-gold transition-colors uppercase">Silungwe</span>
                <span className="block text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-slc-gold leading-none mt-1 font-black">Law Consultants</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-black transition-all hover:text-slc-gold relative py-2 group ${
                    isActive ? 'text-slc-gold' : 'text-slate-300'
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    {isActive && <span className="w-1 h-1 bg-slc-gold rounded-full"></span>}
                    <span>{link.name}</span>
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-slc-gold transform origin-left transition-transform duration-500 ${
                    isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="bg-slc-gold hover:bg-white text-slate-950 px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg active:scale-95"
            >
              Consultation
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white bg-slate-900/50 backdrop-blur-md rounded-md border border-slate-700/50 focus:outline-none transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-slate-950 z-[110] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="absolute top-0 w-full px-4 sm:px-6 py-6 flex justify-between items-center h-24">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-slate-900 border border-slc-gold flex items-center justify-center transform rotate-45">
                    <span className="text-slc-gold font-serif font-bold text-lg -rotate-45">S</span>
                </div>
            </Link>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 text-white"
            >
              <X size={32} />
            </button>
        </div>

        <div className="flex flex-col h-full justify-center px-8 sm:px-12 space-y-6">
          <div className="text-slc-gold text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-50">Navigation Menu</div>
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-3xl sm:text-4xl font-serif font-bold transition-all transform duration-500 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              } ${
                location.pathname === link.path ? 'text-slc-gold' : 'text-slate-500 hover:text-white'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="flex items-center">
                {location.pathname === link.path && <span className="w-4 h-0.5 bg-slc-gold mr-4"></span>}
                {link.name}
              </span>
            </Link>
          ))}
          <div className={`pt-12 transform transition-all duration-700 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <Link
              to="/contact"
              className="inline-block bg-slc-gold text-slate-950 px-10 py-5 text-center font-black uppercase tracking-[0.2em] rounded-sm text-xs shadow-2xl active:scale-95 w-full sm:w-auto"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8
      }
    })
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 md:py-24 border-t border-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <motion.div 
            className="col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={containerVariants}
          >
             <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 border border-slc-gold flex items-center justify-center transform rotate-45">
                <span className="text-slc-gold font-serif font-bold text-lg -rotate-45">S</span>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">SILUNGWE</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-xs font-medium italic">
              "Excellence in Legal Consultancy and Advisory Services."
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Linkedin', 'Globe'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center hover:border-slc-gold hover:text-slc-gold transition-all">
                  <Globe size={16} />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={containerVariants}
          >
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Offices</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-slc-gold shrink-0 mt-1" />
                <span className="leading-relaxed">Lilongwe, Malawi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} className="text-slc-gold shrink-0" />
                <span>Mon-Fri: 08:00 - 17:00</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={2}
            variants={containerVariants}
          >
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Direct Access</h4>
            <div className="bg-slate-900/40 p-5 border border-slate-800 rounded-sm">
              <div className="flex items-center space-x-3 text-[11px] mb-3">
                  <Phone size={14} className="text-slc-gold" />
                  <span>0997939201 / 0995722700</span>
              </div>
              <div className="flex items-center space-x-3 text-[11px]">
                  <Mail size={14} className="text-slc-gold" />
                  <span className="text-white font-bold">info@silungwelaw.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={3}
            variants={containerVariants}
          >
            <h4 className="text-white font-black mb-8 text-[10px] uppercase tracking-[0.3em]">Connect</h4>
            <form className="flex group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-900 border border-slate-800 text-white text-xs px-4 py-3.5 w-full focus:ring-1 focus:ring-slc-gold outline-none rounded-l-sm transition-all" 
              />
              <button className="bg-slc-gold text-slate-950 px-4 py-3.5 hover:bg-white transition-all rounded-r-sm">
                <ChevronRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-slate-900 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] gap-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Silungwe Law Consultants. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="hover:text-slc-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-slc-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-slc-gold transition-colors">Compliance</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/team" element={<Team />} />
            <Route path="/litigation" element={<Litigation />} />
            <Route path="/global-csr" element={<GlobalCSR />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
