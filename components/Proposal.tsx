import React from 'react';
import Section from './Section';
import { Target, Monitor, Rocket } from 'lucide-react';

const Proposal: React.FC = () => {
  return (
    <Section id="proposal" className="bg-white border-b border-slate-100">
       <div className="text-center mb-16">
        <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">The Proposal</span>
        <h2 className="text-3xl font-bold text-slate-900">Our Commitment to Vels University</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
         {[
           { icon: Target, title: "Marketing & Engagement", desc: "Campaign focused on awareness." },
           { icon: Monitor, title: "Website & App Nurturing", desc: "Activities to engage users." },
           { icon: Rocket, title: "Generate High Intent Leads", desc: "Maximise Applications for Vels University." }
         ].map((item, idx) => (
           <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition-transform text-center flex flex-col items-center border-dashed border-2">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-6">
                 <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
           </div>
         ))}
      </div>
    </Section>
  );
};

export default Proposal;