import React, { useState } from 'react';
import Section from './Section';
import { PROMOTION_CHANNELS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, MessageSquare, Mail, Monitor, ArrowRight, User } from 'lucide-react';

const LeadNurturing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('notifications');

  return (
    <Section id="promotions" className="bg-slate-900 text-white" dark>
       <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left: Menu */}
          <div className="lg:col-span-2">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">Lead Nurturing & Branding</span>
            <h2 className="text-3xl font-bold mb-6">Where Vels University will be seen.</h2>
            <p className="text-slate-400 mb-8">
               We will enhance Vels University brand and generate targeted leads through a multi-channel strategy.
            </p>

            <div className="space-y-3">
               {PROMOTION_CHANNELS.map((channel) => (
                 <button 
                   key={channel.id}
                   onClick={() => setActiveTab(channel.id)}
                   className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all border ${
                     activeTab === channel.id 
                       ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-blue-900/50' 
                       : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                   }`}
                 >
                    <div className={`p-2 rounded-lg ${activeTab === channel.id ? 'bg-white/20' : 'bg-slate-700'}`}>
                       <channel.icon size={20} />
                    </div>
                    <div>
                       <div className="font-bold text-sm">{channel.label}</div>
                       <div className="text-xs opacity-70">{channel.stats}</div>
                    </div>
                    {activeTab === channel.id && <ArrowRight size={16} className="ml-auto" />}
                 </button>
               ))}
            </div>
          </div>

          {/* Right: Preview Area */}
          <div className="lg:col-span-3 bg-slate-800 rounded-3xl border border-slate-700 p-8 relative overflow-hidden flex items-center justify-center min-h-[500px]">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

             <AnimatePresence mode="wait">
                
                {/* NOTIFICATIONS VISUAL (Slide 11) */}
                {activeTab === 'notifications' && (
                  <motion.div 
                    key="notif"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full max-w-sm"
                  >
                     {/* Phone Notification */}
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl mb-4 shadow-2xl">
                        <div className="flex items-start gap-3">
                           <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                              <Bell size={20} className="text-white" />
                           </div>
                           <div>
                              <div className="flex justify-between items-center mb-1">
                                 <span className="font-bold text-sm text-white">SelfStudys App</span>
                                 <span className="text-xs text-slate-400">Now</span>
                              </div>
                              <p className="text-xs text-slate-200 leading-relaxed">
                                 <span className="font-bold">Vels Institute of Science, Technology & Advanced Studies (VISTAS)</span> Apply Now!
                              </p>
                           </div>
                        </div>
                     </div>
                     {/* Website Toast */}
                     <div className="bg-white text-slate-900 p-4 rounded-lg shadow-xl border-l-4 border-brand-blue translate-x-8">
                        <div className="font-bold text-sm mb-1">Applications Closing Soon</div>
                        <div className="text-xs text-slate-600 mb-2">Vels Institute Admissions 2026 are closing in 24 hours.</div>
                        <button className="bg-brand-blue text-white text-xs px-3 py-1.5 rounded font-bold">Apply Now</button>
                     </div>
                  </motion.div>
                )}

                {/* WHATSAPP VISUAL (Slide 12) */}
                {activeTab === 'whatsapp' && (
                   <motion.div 
                     key="whatsapp"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     className="w-full max-w-xs bg-[#efeae2] rounded-3xl overflow-hidden border border-slate-600 shadow-2xl font-sans"
                   >
                      <div className="bg-[#075e54] p-4 text-white flex items-center gap-3">
                         <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500"><User size={16}/></div>
                         <div className="font-bold text-sm">SelfStudys Updates</div>
                      </div>
                      <div className="p-4 space-y-4 h-[300px] overflow-y-auto">
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-xs text-slate-800">
                            <p className="mb-2 font-bold">Application deadline: Today</p>
                            <p className="mb-2">Toll Free: 1800 1212 88800</p>
                            <p>Thank you, Priya<br/>Vels Institute of Science, Technology & Advanced Studies</p>
                            <div className="text-[10px] text-right text-slate-400 mt-1">12:46 pm</div>
                         </div>
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[90%] text-xs text-slate-800">
                             <p className="mb-2">Enroll now for admission at Vels Institute (VISTAS). Apply soon! Limited days left.</p>
                             <div className="text-blue-500 underline">https://vels.edu</div>
                             <div className="text-[10px] text-right text-slate-400 mt-1">4:26 pm</div>
                         </div>
                      </div>
                   </motion.div>
                )}

                {/* EMAIL VISUAL (Slide 13) */}
                {activeTab === 'email' && (
                  <motion.div 
                     key="email"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="w-full max-w-sm bg-white text-slate-800 rounded-xl overflow-hidden shadow-2xl"
                  >
                     <div className="border-b border-slate-100 p-4">
                        <div className="font-bold text-sm mb-1">Subject: 48 Hours LEFT | Applications Closing Apply Now</div>
                        <div className="text-xs text-slate-500">From: SelfStudys Updates</div>
                     </div>
                     <div className="p-0">
                        {/* Email Banner */}
                        <div className="bg-slate-900 h-32 relative overflow-hidden p-6 flex items-center text-white">
                           <div className="relative z-10">
                              <div className="text-xs font-bold text-yellow-400 mb-1">ADMISSIONS 2026</div>
                              <h3 className="font-bold text-lg leading-tight">Vels Institute of Science, Technology & Advanced Studies</h3>
                           </div>
                           <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-blue to-transparent opacity-60"></div>
                        </div>
                        <div className="p-6 text-center">
                           <h4 className="font-bold text-red-600 mb-2">Admissions Closing in 10 Hours</h4>
                           <p className="text-xs text-slate-600 mb-4">Start filling out your application forms at Vels Institute of Science, Technology & Advanced Studies (VISTAS)</p>
                           <button className="bg-red-600 text-white font-bold py-2 px-6 rounded text-sm w-full">
                              Click & Consult Counsellors
                           </button>
                        </div>
                     </div>
                  </motion.div>
                )}

                 {/* BANNERS/MOCK TEST VISUAL (Slide 14) */}
                 {activeTab === 'banners' && (
                  <motion.div 
                     key="banners"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     className="w-full max-w-lg bg-white text-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-200"
                  >
                     {/* Mock Website Header */}
                     <div className="h-12 border-b border-slate-200 flex items-center px-4 justify-between bg-slate-50">
                        <div className="w-20 h-4 bg-slate-300 rounded"></div>
                        <div className="flex gap-2">
                           <div className="w-16 h-8 bg-brand-blue text-white text-xs flex items-center justify-center rounded font-bold">Sign In</div>
                        </div>
                     </div>
                     {/* Banner Space */}
                     <div className="bg-slate-900 p-4 flex items-center justify-between">
                        <div className="text-white">
                           <div className="text-xs font-bold text-yellow-400">VELS INSTITUTE</div>
                           <div className="font-bold text-sm">Admissions 2026 Open</div>
                        </div>
                        <button className="bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded">Apply</button>
                     </div>
                     {/* Mock Test Content */}
                     <div className="p-6">
                        <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-500">
                           <span>Physics Test 19...</span>
                           <span className="text-red-500">TIME LEFT - 19:04 MIN</span>
                        </div>
                        <div className="space-y-3">
                           <div className="h-2 w-full bg-slate-100 rounded"></div>
                           <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                           <div className="h-32 w-full bg-slate-50 border border-slate-100 rounded flex items-center justify-center text-slate-300 text-xs">
                              Question Diagram
                           </div>
                        </div>
                     </div>
                  </motion.div>
                )}

             </AnimatePresence>
          </div>
       </div>
    </Section>
  );
};

export default LeadNurturing;