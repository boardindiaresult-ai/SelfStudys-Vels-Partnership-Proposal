import React from 'react';
import Section from './Section';
import { APPS_LIST } from '../constants';
import { Smartphone, Star, Download } from 'lucide-react';

const AppsGrid: React.FC = () => {
  return (
    <Section id="apps" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Mobile Applications Ecosystem</h2>
        <p className="text-slate-600">
           Our network of high-performance educational apps drives millions of students to our ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {APPS_LIST.map((app, idx) => (
           <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-shadow flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-bold text-xs text-center p-1 leading-tight shadow-md ${app.color}`}>
                 {app.name.split(' ')[0]} <br/> <span className="text-[10px] opacity-80">App</span>
              </div>
              <div>
                 <h3 className="font-bold text-slate-900 text-sm leading-tight mb-2">{app.name}</h3>
                 <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-0.5"><Star size={10} className="fill-yellow-400 text-yellow-400"/> 4.5</span>
                    <span className="flex items-center gap-0.5"><Download size={10} /> 500K+</span>
                 </div>
                 <button className="mt-3 text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium hover:bg-slate-200 transition-colors">
                   Install
                 </button>
              </div>
           </div>
         ))}
      </div>
    </Section>
  );
};

export default AppsGrid;