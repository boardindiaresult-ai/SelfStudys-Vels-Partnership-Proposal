import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AppsGrid from './components/AppsGrid';
import Journey from './components/Journey';
import LeadNurturing from './components/LeadNurturing';
import Proposal from './components/Proposal';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';

function App() {
  return (
    <div className="antialiased text-slate-900 bg-slate-50 selection:bg-brand-blue selection:text-white">
      <main className="flex flex-col">
        <Hero />
        <Stats />
        <AppsGrid />
        <Journey />
        <LeadNurturing />
        <Proposal />
        <SocialProof />
        <Contact />
      </main>
    </div>
  );
}

export default App;