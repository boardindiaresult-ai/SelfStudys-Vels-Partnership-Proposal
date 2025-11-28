import React from 'react';
import { Search, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative pt-20 pb-20 overflow-hidden bg-slate-50 border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Proposal Text (Slide 1) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-brand-blue font-extrabold text-3xl md:text-5xl mb-6 tracking-tight leading-tight">
              Partnership Proposal <br/>
              <span className="text-slate-900">2025-26</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-600 leading-relaxed mb-6">
              <span className="font-bold text-slate-900">SelfStudys.com</span> <span className="text-sm text-slate-400">(H20 Tech Labs Pvt Ltd)</span>
              <br/>
              <span className="text-slate-400 text-xl">&</span>
              <br/>
              <span className="font-bold text-slate-900">Vels Institute of Science Technology and Advanced Studies</span>
            </h1>
          </motion.div>

          {/* Right: Homepage Visual Mockup (Slide 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Mock Browser Window */}
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10">
              {/* Browser Bar */}
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                 </div>
                 <div className="flex-1 bg-white mx-4 rounded-md h-6 text-[10px] text-slate-400 flex items-center px-2">
                   selfstudys.com
                 </div>
              </div>

              {/* Website Content Mockup */}
              <div className="p-4 bg-slate-50 min-h-[300px]">
                 {/* Nav Mock */}
                 <div className="flex justify-between items-center mb-4">
                    <div className="w-24 h-6 bg-slate-800 rounded"></div>
                    <div className="flex gap-2 text-slate-400">
                      <Search size={16} />
                      <User size={16} />
                    </div>
                 </div>

                 {/* VELS BANNER PROMOTION (Replicating Slide 2 visual) */}
                 <div className="relative bg-slate-900 rounded-lg overflow-hidden text-white p-6 flex items-center justify-between mb-4 shadow-lg ring-1 ring-slate-900/5">
                    <div className="relative z-10 w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center text-[8px] font-bold">V</div>
                         <span className="text-xs font-bold text-yellow-400">ADMISSIONS 2026</span>
                      </div>
                      <h2 className="text-lg font-bold leading-tight mb-2">Vels Institute of Science, Technology & Advanced Studies (VISTAS)</h2>
                      <button className="bg-yellow-500 text-black text-xs font-bold px-3 py-1.5 rounded">Apply Prime Now</button>
                    </div>
                    {/* Student Image Abstract */}
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-brand-blue to-transparent opacity-50"></div>
                    <div className="relative z-10 w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 text-xs">
                      Image
                    </div>
                 </div>

                 {/* Tiles Below */}
                 <div className="grid grid-cols-3 gap-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="bg-white p-2 rounded border border-slate-100 shadow-sm">
                         <div className="h-2 w-12 bg-slate-200 mb-1 rounded"></div>
                         <div className="h-2 w-8 bg-slate-100 rounded"></div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Floaters */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
               <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-slate-900">#810</div>
                  <div className="text-xs text-slate-500">Country Rank</div>
               </div>
               <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
                 <span className="text-lg">▲</span> 52 Positions
               </div>
            </div>

          </motion.div>
        </div>

        {/* Highlighted About Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden group">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue via-blue-400 to-green-400"></div>
            
            <div className="relative z-10 text-center">
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">About Us</h3>
              <p className="text-xl md:text-3xl text-slate-700 leading-normal font-light max-w-4xl mx-auto">
                <span className="font-bold text-brand-blue">SelfStudys</span> is a trusted, AI-powered student ecosystem for academic support and university discovery. We connect institutions with engaged applicants through strategic branding and targeted recommendations.
              </p>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;