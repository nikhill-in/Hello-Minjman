import React from "react";
import { FaQuestionCircle, FaEnvelopeOpenText, FaReply } from "react-icons/fa";

const Enquiries = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-black text-gray-800 tracking-tight mb-10 flex items-center gap-4">
        <FaQuestionCircle className="text-indigo-600" /> Support Desk
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1,2,3,4].map(msg => (
          <div key={msg} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6">
               <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">New Message</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
               <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white"><FaEnvelopeOpenText /></div>
               <div>
                  <h4 className="font-black text-gray-800">Amit Sharma</h4>
                  <p className="text-xs text-gray-400 font-bold tracking-widest">Oct 26, 2026 • 11:30 AM</p>
               </div>
            </div>
            <p className="text-gray-600 font-medium mb-8 italic">"I am unable to see my recent payouts in the vendor dashboard. Please check my GSTIN verification status."</p>
            <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-black transition-all">
               Reply to Enquiry <FaReply />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enquiries;