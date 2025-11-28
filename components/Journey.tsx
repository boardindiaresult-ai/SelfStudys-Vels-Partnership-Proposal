import React from 'react';
import Section from './Section';
import { JOURNEY_STEPS } from '../constants';
import { motion } from 'framer-motion';
import { User, GraduationCap } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <div id="roadmap">
      {/* Slide 8: Strategic Roadmap Funnel */}
      <Section id="funnel" className="bg-slate-50 border-b border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Roadmap for Vels University</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A Structured Approach to Maximize High-Intent Leads
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          {[
            { label: "Improve Lead Quality", color: "bg-cyan-50 text-cyan-800 border-cyan-200", icon: "🎯", width: "w-full md:w-[600px]" },
            { label: "Increase Applications", color: "bg-pink-50 text-pink-800 border-pink-200", icon: "🚀", width: "w-full md:w-[500px]" },
            { label: "Boost Brand Dominance", color: "bg-indigo-50 text-indigo-800 border-indigo-200", icon: "👑", width: "w-full md:w-[400px]" }
          ].map((layer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${layer.width} ${layer.color} border-2 py-4 md:py-6 rounded-3xl flex items-center justify-center shadow-sm relative z-10 transition-transform hover:scale-105`}
            >
               <span className="mr-3 text-xl">{layer.icon}</span>
               <span className="font-bold text-base md:text-lg">{layer.label}</span>
            </motion.div>
          ))}
          {/* Funnel Arrow */}
          <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[50px] border-t-indigo-100/50 mt-[-10px]"></div>
        </div>
      </Section>

      {/* Slide 9: Student Touchpoints - Detailed Diagram */}
      <Section id="journey" className="bg-white" >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">We are with students at each touch point</h2>
          <p className="text-slate-500">From exam preparation to final admission</p>
        </div>

        {/* Scrollable Container for Diagram */}
        <div className="overflow-x-auto pb-12 pt-12 custom-scrollbar">
           <div className="min-w-[1200px] px-12 relative">
              
              {/* Central Axis Line */}
              <div className="absolute top-[50%] left-0 right-0 h-1 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
              
              <div className="flex justify-between items-center relative">
                
                {/* Start Node: Student */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                   <div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-white shadow-lg flex items-center justify-center">
                      <User size={32} className="text-yellow-900" />
                   </div>
                   <span className="font-bold text-slate-900">Student</span>
                </div>

                {/* Steps */}
                {JOURNEY_STEPS.map((step, index) => (
                  <div key={step.id} className="flex flex-col items-center relative group h-[400px] justify-center w-48">
                     
                     {/* Top Items (Branching Up) */}
                     <div className="absolute bottom-[55%] left-0 right-0 flex flex-col-reverse items-center gap-4 pb-8">
                        {step.topItems.map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex flex-col items-center gap-1"
                          >
                             <div className="bg-white border border-slate-200 p-2 rounded-lg shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-600 hover:border-brand-blue hover:text-brand-blue transition-colors whitespace-nowrap z-20">
                                <item.icon size={14} />
                                {item.label}
                             </div>
                             {/* Dashed Line Connector */}
                             <div className="h-4 w-px border-l border-dashed border-slate-300"></div>
                          </motion.div>
                        ))}
                     </div>

                     {/* Central Node (Main Step) */}
                     <div className="relative z-10 bg-brand-light border-2 border-brand-blue/20 text-brand-dark px-4 py-3 rounded-xl shadow-md text-center w-full min-h-[80px] flex flex-col items-center justify-center transition-transform group-hover:scale-105 group-hover:border-brand-blue bg-white">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                          {step.id}
                        </div>
                        <span className="font-bold text-sm leading-tight">{step.title}</span>
                     </div>

                     {/* Bottom Items (Branching Down) */}
                     <div className="absolute top-[55%] left-0 right-0 flex flex-col items-center gap-4 pt-8">
                        {step.bottomItems.map((item, i) => (
                           <motion.div 
                             key={i}
                             initial={{ opacity: 0, y: -10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.1 * i }}
                             className="flex flex-col-reverse items-center gap-1"
                           >
                              {/* Dashed Line Connector */}
                              <div className="h-4 w-px border-l border-dashed border-slate-300"></div>
                              <div className="bg-white border border-slate-200 p-2 rounded-lg shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-600 hover:border-brand-blue hover:text-brand-blue transition-colors whitespace-nowrap z-20">
                                 <item.icon size={14} />
                                 {item.label}
                              </div>
                           </motion.div>
                        ))}
                     </div>

                  </div>
                ))}

                {/* End Node: University */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                   <div className="w-20 h-20 rounded-full bg-brand-blue border-4 border-white shadow-xl flex items-center justify-center">
                      <GraduationCap size={40} className="text-white" />
                   </div>
                   <div className="text-center">
                     <span className="font-bold text-slate-900 block">Vels</span>
                     <span className="text-xs text-slate-500 font-medium">University</span>
                   </div>
                </div>

              </div>
           </div>
        </div>
        
        {/* Mobile Hint */}
        <div className="text-center text-xs text-slate-400 mt-4 md:hidden">
           Scroll horizontally to view the full journey →
        </div>

      </Section>
    </div>
  );
};

export default Journey;