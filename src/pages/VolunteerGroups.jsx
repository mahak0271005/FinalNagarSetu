import React from 'react';
import { Sparkles } from 'lucide-react';

export default function VolunteerGroups() {
return ( <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">


  {/* Icon */}
  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-violet to-brand-purple flex items-center justify-center text-white shadow-glow-violet mb-6">
    <Sparkles className="w-8 h-8" />
  </div>

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl font-extrabold font-outfit text-slate-900 mb-3">
    Coming Soon 🚀
  </h1>

  {/* Subtext */}
  <p className="text-sm text-slate-500 max-w-md leading-relaxed">
    Volunteer Circles & Drives feature is currently under development. 
    Soon you’ll be able to join community drives, participate in cleanups, 
    and make a real impact in your city.
  </p>

  {/* Optional badge */}
  <div className="mt-6 px-4 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-bold">
    Stay Tuned ✨
  </div>

</div>


);
}