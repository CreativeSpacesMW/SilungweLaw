
import React from 'react';
import { Mail, Linkedin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamData = {
  partners: [
    {
      name: "[Managing Partner Name]",
      role: "Managing Partner",
      specialization: "Corporate Strategy & Consultancy",
      bio: "Our Managing Partner leads the firm's strategic vision, bringing authoritative market experience to every consultancy project and complex legal matter.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Strategy", "Corporate Law", "Leadership"]
    },
    {
      name: "[Senior Consultant Name]",
      role: "Senior Consultant",
      specialization: "Institutional Advisory",
      bio: "Expert consultant with a focus on institutional auditing and regulatory compliance, ensuring operational excellence for all our clients.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Advisory", "Compliance", "Auditing"]
    }
  ],
  associates: [
    {
      name: "[Associate Name]",
      role: "Associate",
      specialization: "Legal Research & Commercial Advisory",
      bio: "Dedicated associate handling complex legal research and commercial contracts for our diverse client base.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Research", "Contracts"]
    },
    {
      name: "[Support Staff Name]",
      role: "Support Staff",
      specialization: "Operations & Administration",
      bio: "Essential personnel managing the daily operations and administrative excellence of Silungwe Law Consultants.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800",
      expertise: ["Operations", "Admin"]
    }
  ]
};

interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  bio: string;
  image: string;
  expertise: string[];
}

interface TeamMemberCardProps {
  member: TeamMember;
  isPartner?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isPartner = false }) => {
  return (
    <div className={`group bg-white rounded-sm overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] ${isPartner ? 'md:flex border-b-4 border-slc-gold' : 'border border-slate-100'}`}>
      <div className={`relative overflow-hidden bg-slate-900 ${isPartner ? 'md:w-[40%] aspect-[4/5] md:aspect-auto' : 'aspect-[4/5]'}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex space-x-2 md:space-x-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
           <a href="#" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-slc-gold hover:text-white transition-colors">
            <Linkedin size={14} />
           </a>
           <a href={`mailto:info@silungwelaw.com`} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-slate-950 hover:bg-slc-gold hover:text-white transition-colors">
            <Mail size={14} />
           </a>
        </div>
      </div>
      
      <div className={`p-6 md:p-10 lg:p-14 ${isPartner ? 'md:w-[60%] flex flex-col justify-center bg-cream' : 'bg-white'}`}>
        <div className="mb-6 md:mb-8">
           <div className="text-slc-gold text-[9px] font-black uppercase tracking-[0.4em] mb-2 md:mb-4">{member.role}</div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slc-dark mb-1 leading-tight tracking-tighter group-hover:text-slc-gold transition-colors font-serif">{member.name}</h3>
        </div>
        
        <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-light italic">
          "{member.bio}"
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
          {member.expertise.map((exp: string, i: number) => (
            <span key={i} className="bg-white text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-widest px-3 py-1.5 md:px-4 md:py-2 border border-slate-100 rounded-full">
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="bg-white pb-20 md:pb-32 pt-24">
      {/* Hero Header */}
      <section className="bg-slc-dark text-white py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-slc-gold transform skew-x-12"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-slc-gold/10 border border-slc-gold/30 px-4 py-2 rounded-full mb-8 backdrop-blur-sm mx-auto">
              <Users size={14} className="text-slc-gold" />
              <span className="text-slc-gold text-[9px] font-black uppercase tracking-[0.4em]">Expert Personnel</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95] tracking-tighter">
              Expert <span className="text-slc-gold italic font-serif font-light">Human</span> <br />Capital.
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto font-serif italic">
              "A multidisciplinary team of consultants and legal experts dedicated to your success."
            </p>
        </div>
      </section>

      {/* Leadership Partners */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-4">
          <h2 className="text-3xl md:text-6xl font-bold text-slc-dark tracking-tighter font-serif">Leadership</h2>
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] pb-1">Strategic Governance</p>
        </div>
        <div className="space-y-16 md:space-y-32">
          {teamData.partners.map((partner, idx) => (
            <TeamMemberCard key={idx} member={partner} isPartner={true} />
          ))}
        </div>
      </section>

      {/* Associate Body */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-20 gap-4">
            <h2 className="text-3xl md:text-6xl font-bold text-slc-dark tracking-tighter font-serif">Consultants & Staff</h2>
            <p className="text-slc-gold text-[9px] font-black uppercase tracking-[0.3em] pb-1">Operational Excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamData.associates.map((associate, idx) => (
              <TeamMemberCard key={idx} member={associate} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Bench Stats */}
      <section className="py-20 md:py-32 container mx-auto px-4">
        <div className="bg-slc-dark p-10 md:p-32 text-center relative overflow-hidden rounded-sm group">
           <div className="absolute top-0 left-0 w-full h-1 bg-slc-gold"></div>
           <div className="max-w-4xl mx-auto relative z-10">
             <h3 className="text-2xl md:text-5xl font-bold text-white mb-12 md:mb-16 tracking-tighter">A New Authority in the Market.</h3>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
               {[
                 { val: "Fresh", label: "Market Entry" },
                 { val: "Expert", label: "Consultants" },
                 { val: "SLC", label: "Firm Hub" },
                 { val: "68+", label: "Focus Areas" }
               ].map((stat, i) => (
                 <div key={i} className="text-center">
                   <div className="text-slc-gold text-3xl md:text-6xl font-serif font-bold mb-1">{stat.val}</div>
                   <p className="text-slate-500 text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em]">{stat.label}</p>
                 </div>
               ))}
             </div>
             <div className="mt-16">
               <Link to="/contact" className="bg-white text-slc-dark px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-slc-gold hover:text-white transition-colors inline-block">
                 Request Partnership
               </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
