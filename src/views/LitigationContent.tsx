
import React, { useEffect } from 'react';
import { Scale, ShieldAlert, Gavel } from 'lucide-react';

const Litigation: React.FC = () => {
  useEffect(() => {
    document.title = "Strategic Impact & Case Scenarios | Silungwe Law Consultants";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Review the strategic impact of Silungwe Law Consultants through expert consultancy scenarios and commercial dispute resolution impact studies.');
    }
  }, []);

  const cases = [
    {
      category: "Corporate Governance",
      title: "[Strategic Advisory Scenario A]",
      description: "Expert consultancy regarding the restructuring of major financial institutions to ensure compliance with emerging regulatory frameworks in the SADC region.",
      outcome: "Successfully navigated complex regulatory hurdles, establishing a new model for institutional resilience."
    },
    {
      category: "Commercial Dispute Resolution",
      title: "[Consultancy Case Study B]",
      description: "High-stakes advisory for cross-border commercial disputes settlement, focusing on protecting client assets while maintaining business continuity.",
      outcome: "Achieved strategic settlement that preserved key market partnerships and mitigated long-term risk."
    },
    {
      category: "Market Entry & Investment",
      title: "[Market Expansion Scenario C]",
      description: "Strategic guidance for international investors entering the Malawian market, focusing on land acquisition and local partnership frameworks.",
      outcome: "Facilitated smooth entry and sustainable operational launch for a multinational conglomerate."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      <section className="py-24 bg-cream border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <div className="inline-block bg-slc-gold/10 text-slc-gold px-4 py-1 text-xs font-bold uppercase tracking-widest mb-4 border border-slc-gold/30 rounded-full">Expertise Scenarios</div>
              <h1 className="text-5xl font-bold text-slc-dark mb-6 font-serif tracking-tighter">Strategic Impact</h1>
              <p className="text-xl text-slate-600 font-light leading-relaxed italic">
                Our consultants bring decades of combined experience in handling high-velocity, precedent-setting legal and business challenges.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <Scale size={120} className="text-slc-gold/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {cases.map((c, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 border-b border-slate-100 pb-16 last:border-0 hover:bg-slate-50 transition-colors p-4 rounded-sm">
                <div className="md:w-1/4">
                  <div className="text-slc-gold font-bold text-sm uppercase tracking-widest mb-2 flex items-center">
                    <Gavel size={16} className="mr-2" />
                    {c.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slc-dark leading-tight font-serif">{c.title}</h3>
                </div>
                <div className="md:w-3/4 bg-white p-8 rounded-sm shadow-sm border border-slate-100">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-4">Advisory Overview</h4>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    "{c.description}"
                  </p>
                  <div className="flex items-start bg-slate-50 p-4 border-l-4 border-slc-gold shadow-sm">
                    <ShieldAlert size={20} className="text-slc-gold mr-4 shrink-0 mt-1" />
                    <div>
                      <h5 className="text-[10px] font-black text-slc-dark uppercase tracking-[0.2em] mb-1">Impact & Outcome</h5>
                      <p className="text-sm text-slate-600">{c.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Litigation;
