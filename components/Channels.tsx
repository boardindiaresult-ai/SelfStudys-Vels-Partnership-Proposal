import React from 'react';
import Section from './Section';
import { CHANNELS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Channels: React.FC = () => {
  return (
    <Section id="strategy" className="bg-slate-50">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <span className="text-brand-blue font-bold text-sm tracking-wider uppercase mb-2 block">Strategic Roadmap</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Multi-Channel Lead Nurturing
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We don't just generate leads; we enhance the Vels University brand through a structured 3-stage funnel: Improve Lead Quality, Increase Applications, and Boost Brand Dominance.
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-brand-blue">1</div>
               <div className="font-semibold text-slate-800">Marketing & Engagement Campaign</div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">2</div>
               <div className="font-semibold text-slate-800">Website & App Nurturing</div>
             </div>
             <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">3</div>
               <div className="font-semibold text-slate-800">Maximize High-Intent Applications</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CHANNELS.map((channel) => (
            <div key={channel.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${channel.color}`}>
                <channel.icon size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">{channel.title}</h3>
              <p className="text-sm text-slate-500 mb-4 h-10">{channel.description}</p>
              
              <div className="space-y-2 pt-4 border-t border-slate-50">
                {channel.metrics.map((m, i) => (
                  <div key={i} className="flex items-center justify-between text-xs font-medium text-slate-700">
                    <span>{m.split(':')[0]}</span>
                    <span className="text-brand-blue">{m.split(':')[1] || <ArrowUpRight size={12}/>}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Channels;