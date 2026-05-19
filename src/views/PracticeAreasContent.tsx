
import React, { useEffect } from 'react';
import { Landmark, Zap, Code, ShieldCheck, Globe, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PracticeAreas: React.FC = () => {
  useEffect(() => {
    document.title = "Consultancy Services & Strategy | Silungwe Law Consultants";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our legal consultancy domains including corporate law, commercial data innovation, and private client protection in Malawi.');
    }
  }, []);

  const areas = [
    {
      title: "Corporate Consultancy",
      icon: <Building2 size={32} />,
      description: "Expert advisory on business structure, governance, and operational compliance in the Malawian market.",
      details: ["Strategic Advisory", "Corporate Governance", "Entity Formation", "Compliance Audits"]
    },
    {
      title: "Commercial Law",
      icon: <Landmark size={32} />,
      description: "Comprehensive legal support for commercial transactions, contract law, and regulatory navigation.",
      details: ["Contract Architecture", "Trade Regulations", "Commercial Disputes", "Finance Advisory"]
    },
    {
      title: "Energy & Infrastructure",
      icon: <Zap size={32} />,
      description: "Navigating the complex regulatory landscape of energy projects and infrastructure development.",
      details: ["Energy Regulation", "PPP Frameworks", "Mining Compliance", "ESG Integration"]
    },
    {
      title: "TMT & Digital Innovation",
      icon: <Code size={32} />,
      description: "Legal support for technology, media, and telecommunications sectors in an evolving digital economy.",
      details: ["Tech Regulation", "Data Privacy", "IP Management", "Media Law"]
    },
    {
      title: "Consultancy & Advisory",
      icon: <Globe size={32} />,
      description: "High-level strategic consultancy for domestic and international entities looking to enter the market.",
      details: ["Market Entry Strategy", "Project Management", "Policy Analysis", "Stakeholder Engagement"]
    },
    {
      title: "Private Client Protection",
      icon: <ShieldCheck size={32} />,
      description: "Sophisticated advisory for asset protection, property law, and specialized private client needs.",
      details: ["Property Law", "Asset Structuring", "Trusts & Estates", "Conveyancing"]
    }
  ];

  return (
    <div className="bg-cream/30 pb-32 pt-24">
      {/* Header */}
      <section className="bg-slc-dark text-white py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slc-dark via-slc-dark/90 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="text-slc-gold text-[10px] font-black uppercase tracking-[0.5em] mb-8">Service Domains</div>
            <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] tracking-tighter">
              Consultancy <br />
              <span className="text-slc-gold">Mastery.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl font-serif italic">
              "Silungwe Law Consultants delivers engineered legal solutions tailored to the velocity of modern enterprises."
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="bg-white p-12 md:p-16 border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden rounded-sm backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-1.5 h-full bg-slc-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="mb-10 text-slc-gold transform group-hover:scale-110 transition-transform origin-left">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-slc-dark leading-tight">{area.title}</h3>
                <p className="text-slate-500 mb-10 text-base leading-relaxed h-20 overflow-hidden">
                  {area.description}
                </p>
                <div className="space-y-4">
                  {area.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <div className="w-1 h-1 bg-slc-gold/50 rounded-full mr-4"></div>
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.3em] text-slc-gold flex items-center">
                     Request Briefing <ChevronRight size={14} className="ml-2" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 container mx-auto px-4">
        <div className="bg-slc-dark p-16 md:p-24 text-center text-white relative overflow-hidden rounded-sm group">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale transition-transform duration-[20s] group-hover:scale-110"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter">Strategic Clarity in Every Action.</h2>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              Our newly established firm brings a fresh, authoritative entry into the Malawian consultancy market.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="bg-slc-gold text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-slc-dark transition-all transform hover:-translate-y-1">
                 Digital Consultation
               </Link>
               <Link to="/team" className="border border-white/20 text-white px-12 py-5 font-black uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">
                 Meet The Consultants
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
