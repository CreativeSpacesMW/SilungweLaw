
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Landmark, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Our Genesis & Expertise | Silungwe Law Consultants";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Silungwe Law Consultants, a modern vanguard of Malawian legal consultancy based in Lilongwe. Our multidisciplinary team ensures structural excellence.');
    }
  }, []);

  return (
    <div className="bg-white pt-24">
      {/* Institutional Architecture */}
      <section className="py-16 md:py-24 bg-slc-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 transform skew-x-12 hidden md:block"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 font-serif">Structural Excellence</h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10 md:mb-12">
              Based in the bustling heart of <span className="text-slc-gold font-semibold uppercase tracking-widest">Lilongwe</span>, Silungwe Law Consultants serves as the modern vanguard of Malawian legal consultancy. We have established a multidisciplinary engine capable of servicing the most complex transactions and regulatory challenges for a new market era.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-slc-gold font-bold text-2xl md:text-3xl mb-2">Modern</div>
                <p className="text-xs md:text-sm opacity-70 leading-relaxed tracking-wider">A newly established firm built for speed, precision, and technological integration.</p>
              </div>
              <div>
                <div className="text-slc-gold font-bold text-2xl md:text-3xl mb-2">Expert</div>
                <p className="text-xs md:text-sm opacity-70 leading-relaxed tracking-wider">Highly qualified practitioners bridging local consultancy with international standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slc-dark font-serif">Our Genesis</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Silungwe Law Consultants was founded with a clear departure from traditional legal bureaucracy. We envisioned a firm that speaks the language of modern commerce: speed, technical precision, and strategic insight.
                </p>
                <p>
                  Today, SLC is more than just a provider of legal services; we are a strategic consultancy that bridges the gap between Malawian enterprises and regional financial hubs.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-50 p-8 border-b-4 border-slc-gold">
                   <Award size={32} className="text-slc-gold mb-4" />
                   <h4 className="font-bold mb-2">Advisory</h4>
                   <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">Top-tier consultancy in corporate strategy.</p>
                </div>
                <div className="bg-slc-dark text-white p-8">
                   <Shield size={32} className="text-slc-gold mb-4" />
                   <h4 className="font-bold mb-2">Trust</h4>
                   <p className="text-xs text-slate-400 uppercase font-bold tracking-tight">Built on fixed pillars of market integrity.</p>
                </div>
              </div>
              <div className="pt-12">
                 <div className="bg-slc-gold text-white p-8 h-full flex flex-col justify-center shadow-2xl">
                    <Landmark size={32} className="mb-4" />
                    <h4 className="font-bold mb-2">Fresh Entry</h4>
                    <p className="text-xs opacity-80 uppercase font-bold tracking-tight">A new, authoritative voice in the legal market.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Built by Experts</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12">
            Our success is founded on the combined expertise of a high-performing team of consultants and legal professionals. 
          </p>
          <Link to="/team" className="inline-flex items-center space-x-3 bg-slc-dark text-white px-10 py-5 rounded-sm font-black hover:bg-slc-gold transition-all group shadow-xl">
            <span>Explore Our Team</span>
            <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
