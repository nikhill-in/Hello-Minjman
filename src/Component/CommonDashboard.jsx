import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaStore, FaTools, FaTruck, FaShieldAlt, FaHandshake, FaGlobe } from "react-icons/fa";
import heroImg from "../../public/heroImg.jpg"; 

const CommonDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen w-full">
      <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-16 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-4xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 w-full border border-gray-100 items-stretch">
          
          <div className="relative group overflow-hidden bg-slate-200 min-h-75 lg:min-h-full">
            <img
              src={heroImg}
              alt="Minjuuan Gateway"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end p-8 md:p-12">
              <p className="text-white text-xl font-medium italic leading-relaxed">
                "Connecting quality services with the right people, every single day."
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-4xl italic font-serif md:text-5xl font-black tracking-tighter text-right leading-7 text-gray-800  mb-4">
                Hello <br /> <span className="text-indigo-600">Minjuuan_</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to India's premier mediator ecosystem. We bridge the gap between 
                skilled providers and those in need, ensuring safety, quality, and 
                transparency.
              </p>
            </div>

            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-6 text-center lg:text-left">
              Continue Your Journey As
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => navigate("/join/user")}
                className="group flex items-center gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm border border-gray-100"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-slate-800 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                  <FaUser size={20} />
                </div>
                <span className="font-bold text-lg">User</span>
              </button>

              <button
                onClick={() => navigate("/join/vendor")}
                className="group flex items-center gap-4 p-5 bg-emerald-50 rounded-2xl hover:bg-emerald-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm border border-emerald-100"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-emerald-700 transition-colors">
                  <FaStore size={20} />
                </div>
                <span className="font-bold text-lg">Vendor</span>
              </button>

              <button
                onClick={() => navigate("/join/professional")}
                className="group flex items-center gap-4 p-5 bg-purple-50 rounded-2xl hover:bg-purple-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm border border-purple-100"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-purple-700 transition-colors">
                  <FaTools size={20} />
                </div>
                <span className="font-bold text-lg">Professional</span>
              </button>

              <button
                onClick={() => navigate("/join/delivery")}
                className="group flex items-center gap-4 p-5 bg-orange-50 rounded-2xl hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm border border-orange-100"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-orange-600 transition-colors">
                  <FaTruck size={20} />
                </div>
                <span className="font-bold text-lg">Delivery</span>
              </button>
            </div>

            <p className="mt-12 text-center lg:text-left text-sm text-gray-400">
              By continuing, you agree to Minzwan's Terms & Conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Minzwan Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We operate as a trusted mediator to ensure a seamless experience for buyers, 
            sellers, and logistics partners alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <FaShieldAlt size={30} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Secure Escrow</h3>
            <p className="text-gray-500 leading-relaxed">
              We hold payments securely and only release them to the provider once 
              the user confirms they have received the product or service.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <FaHandshake size={30} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Verified Partners</h3>
            <p className="text-gray-500 leading-relaxed">
              Every vendor and professional undergoes a multi-step verification 
              process including KYC and skill assessment to maintain standards.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <FaGlobe size={30} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Seamless Logistics</h3>
            <p className="text-gray-500 leading-relaxed">
              Our real-time tracking connects vendors with the nearest delivery 
              partners, ensuring lightning-fast fulfillment across the city.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-indigo-400 leading-tight">Ready to start your journey?</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Join thousands of people who are already growing their business or 
              simplifying their lives with Minzwan.
            </p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-gray-900 px-12 py-5 rounded-full font-black text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            Get Started Now
          </button>
        </div>
      </div>
      
      {/* <footer className="py-12 border-t border-gray-200 w-full text-center">
        <p className="text-gray-400 text-sm font-medium">
          © 2026 Minzwan Mediator Platform • Secure. Verified. Local.
        </p>
      </footer> */}
    </div>
  );
};

export default CommonDashboard;