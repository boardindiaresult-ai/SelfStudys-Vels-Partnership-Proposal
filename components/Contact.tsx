import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-blue text-white py-32 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Thank You
        </motion.h2>
        <p className="text-blue-100 text-lg mb-12">
          We look forward to partnering with Vels Institute of Science Technology and Advanced Studies.
        </p>
        
        <div className="inline-flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20">
           <div className="text-left px-4">
              <div className="text-xs text-blue-200 uppercase tracking-widest font-bold mb-1">Contact</div>
              <div className="font-bold text-xl">SelfStudys.com</div>
              <div className="text-sm opacity-80">(H20 Tech Labs Pvt Ltd)</div>
           </div>
           <div className="hidden md:block w-px bg-white/20"></div>
           <div className="flex items-center gap-4 px-4">
              <a href="mailto:partnerships@selfstudys.com" className="bg-white text-brand-blue px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                 Get in Touch
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;