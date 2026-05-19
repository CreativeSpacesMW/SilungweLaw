
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scale, Zap, TrendingUp, Building, ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section - Executive Visuals */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">
        {/* Background Overlay Graphics */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-slc-gold/10 rounded-full filter blur-[120px] animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply opacity-40 scale-105 transition-transform duration-[10s]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-3 bg-slc-gold/10 border border-slc-gold/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-slc-gold rounded-full animate-ping"></span>
              <span className="text-slc-gold text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">Lilongwe's Market Consultant</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.95] tracking-tighter">
              Law. <span className="text-slc-gold">Advisory.</span> <br />
              <span className="italic font-serif font-light text-slate-400">Strategy.</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light font-serif italic">
              "Excellence in legal consultancy and strategic advisory for a new era."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/contact" className="w-full sm:w-auto bg-slc-gold text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] rounded-sm text-center hover:bg-white hover:text-slc-dark transition-all shadow-xl">
                Consultation
              </Link>
              <Link to="/practice-areas" className="w-full sm:w-auto border border-white/20 text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] rounded-sm text-center hover:bg-white/10 transition-all flex items-center justify-center group">
                Services <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-40">
           <span className="text-[8px] text-white uppercase tracking-[0.4em] mb-2">Explore</span>
           <ArrowDown size={16} className="text-slc-gold" />
        </div>
      </section>

      {/* Modern Stats Grid */}
      <section className="relative z-20 -mt-10 md:-mt-20 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-[0_30px_100px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { label: "Expertise", val: "Legal", suffix: "+", sub: "Advisory Services" },
              { label: "Presence", val: "LLW", suffix: "", sub: "Lilongwe Flagship" },
              { label: "Network", val: "SLC", suffix: "", sub: "Strategic Global Ties" }
            ].map((stat, i) => (
              <div key={i} className="p-8 md:p-12 text-center hover:bg-slate-50 transition-colors">
                <div className="text-slc-gold text-[9px] font-black uppercase tracking-[0.4em] mb-3">{stat.label}</div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-1">
                  {stat.val}<span className="text-slc-gold">{stat.suffix}</span>
                </div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Genesis */}
      <section className="py-20 md:py-32 lg:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            <div className="lg:w-1/2 relative">
               <div className="absolute -top-10 -left-10 text-[120px] md:text-[200px] font-serif font-black text-slate-50 leading-none select-none -z-10">2026</div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-slate-950 leading-[1.1] tracking-tighter">
                A Fresh <br /><span className="text-slc-gold">Approach.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
                <p>
                  Silungwe Law Consultants is a newly established firm founded with a clear vision: to redefine legal consultancy in Malawi for a modern, globalized business environment.
                </p>
                <p className="font-medium text-slate-900">
                  Our authoritative approach combines deep legal expertise with strategic business advisory.
                </p>
                <div className="pt-8 flex items-center space-x-4">
                  <div className="w-12 h-px bg-slc-gold"></div>
                  <Link to="/about" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-950 hover:text-slc-gold transition-colors flex items-center">
                    About Us <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute inset-0 bg-slc-gold transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-[400px] md:h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Modern Architecture" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-slate-950 text-white p-6 md:p-10 shadow-2xl">
                   <Building size={32} className="text-slc-gold mb-4 md:mb-6" />
                   <h4 className="text-xl md:text-2xl font-bold mb-1">Lilongwe HQ</h4>
                   <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Lilongwe, Malawi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Pillars */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-950 tracking-tighter">Strategic Pillars</h2>
            <div className="w-16 h-1 bg-slc-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Scale size={40} />, title: "Law", desc: "Foundational legal expertise for robust corporate protection.", label: "Foundational" },
              { icon: <Zap size={40} />, title: "Advisory", desc: "Expert consultancy for navigating Malawian business landscapes.", label: "Innovation" },
              { icon: <TrendingUp size={40} />, title: "Strategy", desc: "Forward-thinking strategies for sustainable market excellence.", label: "Market" }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-10 md:p-12 lg:p-14 border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 text-slate-50 text-6xl md:text-8xl font-black -z-0 group-hover:text-slc-gold/5 transition-colors">{i+1}</div>
                <div className="relative z-10">
                  <div className="text-slc-gold mb-8 transform group-hover:scale-110 transition-transform origin-left">{pillar.icon}</div>
                  <div className="text-[9px] text-slc-gold font-black uppercase tracking-[0.4em] mb-4">{pillar.label}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">{pillar.title}</h3>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
