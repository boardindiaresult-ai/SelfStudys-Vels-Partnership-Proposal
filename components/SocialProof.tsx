import React from 'react';
import Section from './Section';
import { COLLEGE_RESULTS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <Section id="results" className="bg-slate-50">
       <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">College Performance 2024-25</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We deliver consistent results for top universities across India.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {COLLEGE_RESULTS.map((college, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-lg transition-all group">
             <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-3 ${college.logoColor}`}>
               {college.name.charAt(0)}
             </div>
             <h3 className="font-bold text-slate-900 text-xs h-8 flex items-center justify-center mb-3 leading-tight">{college.name}</h3>
             
             <div className="pt-3 border-t border-slate-50">
               <div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">Paid Applications</div>
               <div className="text-xl font-extrabold text-brand-blue">
                 {college.applications.toLocaleString()}
               </div>
             </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SocialProof;