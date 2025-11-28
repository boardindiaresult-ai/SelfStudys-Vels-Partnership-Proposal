import React from 'react';
import Section from './Section';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import { DEMOGRAPHICS_DATA, TRAFFIC_DATA, ENROLMENT_DATA } from '../constants';
import { Users, Clock, Monitor, Smartphone } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <Section id="audience" className="bg-white">
      
      {/* Slide 3: Monthly Traffic */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Monthly Traffic & Engagement</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <p className="text-slate-600 text-lg">
               Our platform provides direct access to millions of highly engaged students actively planning their academic journey.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                   <div className="text-sm text-slate-500 mb-1">Active Users</div>
                   <div className="text-4xl font-bold text-brand-blue">6.7M</div>
                   <div className="text-xs text-blue-600 mt-2">Duration spent researching</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                   <div className="text-sm text-slate-500 mb-1">Avg Engagement</div>
                   <div className="text-4xl font-bold text-green-600">5m 17s</div>
                   <div className="text-xs text-green-600 mt-2">Per active user</div>
                </div>
             </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-64">
             <h4 className="font-semibold text-slate-700 mb-4">Engagement Trend (Feb)</h4>
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TRAFFIC_DATA}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0F52BA" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0F52BA" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{borderRadius: '8px', border:'none', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}} />
                  <Area type="monotone" dataKey="users" stroke="#0F52BA" strokeWidth={3} fill="url(#colorUsers)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Slide 4: Strategic Branding Opportunity (Enrolment) */}
      <div className="mb-20">
         <h2 className="text-3xl font-bold text-slate-900 mb-2">Strategic Branding Opportunity</h2>
         <p className="text-slate-600 mb-8 max-w-3xl">
           Vels University will get access to branding for <span className="font-bold text-brand-blue">2.5 million 12th-grade students</span>. Total student enrolment is 6.25 million.
         </p>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ENROLMENT_DATA.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: item.color }}></div>
                 <div className="relative w-24 h-24 mx-auto mb-4">
                    {/* CSS Donut Chart approximation for simplicity/performance */}
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={item.color} strokeWidth="3.5" strokeDasharray={`${item.value}, 100`} />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-lg text-slate-800">
                      {item.value}%
                    </div>
                 </div>
                 <div className="font-bold text-slate-900 text-lg">{item.name}</div>
                 <div className="text-sm text-slate-500">{item.count}</div>
              </div>
            ))}
         </div>
      </div>

      {/* Slide 5: Demographics & Channels */}
      <div className="grid md:grid-cols-2 gap-12">
         <div>
            <h3 className="text-xl font-bold mb-4">Audience Demographics</h3>
            <p className="text-sm text-slate-600 mb-6">Balanced audience (50.48% Male, 49.52% Female). Core audience is 18-24 years old.</p>
            <div className="h-64 w-full bg-white rounded-xl border border-slate-100 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={DEMOGRAPHICS_DATA} layout="vertical" margin={{ left: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={40} tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="value" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
            </div>
         </div>

         <div>
            <h3 className="text-xl font-bold mb-4">Marketing Channels Distribution</h3>
            <p className="text-sm text-slate-600 mb-6">High-intent organic and direct channels.</p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-blue-600 text-white p-4 rounded-lg flex flex-col justify-between h-32">
                  <span className="opacity-80 text-sm">Organic Search</span>
                  <span className="text-3xl font-bold">64.85%</span>
               </div>
               <div className="bg-blue-500 text-white p-4 rounded-lg flex flex-col justify-between h-32">
                  <span className="opacity-80 text-sm">Direct</span>
                  <span className="text-3xl font-bold">31.91%</span>
               </div>
               <div className="col-span-2 grid grid-cols-3 gap-4">
                  <div className="bg-slate-100 p-3 rounded text-center">
                    <div className="text-xs text-slate-500">Social</div>
                    <div className="font-bold">2.28%</div>
                  </div>
                  <div className="bg-slate-100 p-3 rounded text-center">
                    <div className="text-xs text-slate-500">Referrals</div>
                    <div className="font-bold">0.51%</div>
                  </div>
                  <div className="bg-slate-100 p-3 rounded text-center">
                    <div className="text-xs text-slate-500">Mail</div>
                    <div className="font-bold">0.42%</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </Section>
  );
};

export default Stats;