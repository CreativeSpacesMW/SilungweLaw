
import React, { useEffect } from 'react';
import { Globe, Heart, BookOpen, Leaf } from 'lucide-react';

const GlobalCSR: React.FC = () => {
  useEffect(() => {
    document.title = "Global Advisory & Social Responsibility | Silungwe Law Consultants";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Silungwe Law Consultants bridges Malawian enterprises with regional financial hubs while maintaining a strong commitment to social and community responsibility.');
    }
  }, []);

  return (
    <div className="bg-white pt-24">
      {/* Global Vision */}
      <section className="py-24 bg-slc-dark text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-8 font-serif">Global Advisory</h1>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                Silungwe Law Consultants provides a seamless gateway for international investors entering the <span className="text-slc-gold font-semibold uppercase tracking-widest">Malawian</span> market. Our advisory services are built on global standards of excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-slc-gold/20 p-2 rounded">
                    <Globe size={20} className="text-slc-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Regional Reach</h4>
                    <p className="text-sm text-slate-400 uppercase tracking-tighter">Collaborating with elite consultancy networks across the SADC region.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-slc-gold/20 p-2 rounded">
                    <Globe size={20} className="text-slc-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold">Strategic Passages</h4>
                    <p className="text-sm text-slate-400 uppercase tracking-tighter">Facilitating smooth market entry for foreign capital and multinational operations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-slc-gold/20 rounded-full blur-3xl"></div>
                <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800" className="relative z-10 rounded-lg shadow-2xl opacity-80 backdrop-blur-sm grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Silungwe Law Consultants - Global Network and International Advisory Gateway" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Pillars */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slc-dark font-serif">Social Responsibility</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our commitment to Malawi's progress is reflected in our strategic community contributions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-slate-100 hover:border-slc-gold transition-colors text-center shadow-xl">
              <BookOpen size={48} className="text-slc-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Knowledge</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                We believe in empowering the next generation of Malawian consultants through mentorship and knowledge transfer initiatives.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-100 hover:border-slc-gold transition-colors text-center shadow-xl">
              <Heart size={48} className="text-slc-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Community</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                Supporting local healthcare and social welfare programs in the Central Region of Malawi to foster communal growth.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-100 hover:border-slc-gold transition-colors text-center shadow-xl">
              <Leaf size={48} className="text-slc-gold mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Sustainability</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                Advocating for sustainable business practices and environmental stewardship across our consultancy projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalCSR;
