import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Centered Content Box */}
      <div className="w-full max-w-4xl text-center mx-auto">
        <div className="bg-indigo-600 text-white w-20 h-20 rounded-4xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3">
          <FaUserCircle size={40} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
          Everything, <br/><span className="text-indigo-600 italic underline decoration-wavy">simplified.</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          The ultimate mediator platform for services, products, and deliveries. 
          Verified pros at your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center">
            <FaShieldAlt className="text-indigo-500 text-3xl mb-4" />
            <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">100% Secure</h3>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center">
            <FaClock className="text-indigo-500 text-3xl mb-4" />
            <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">Fast Delivery</h3>
          </div>
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center">
            <FaCheckCircle className="text-indigo-500 text-3xl mb-4" />
            <h3 className="font-black text-gray-800 uppercase text-xs tracking-widest">Top Quality</h3>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
          <button 
            onClick={() => navigate("/register", { state: { role: 'user' } })}
            className="w-full bg-indigo-600 text-white px-10 py-5 rounded-full font-black text-xl shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
          >
            Create Account
          </button>
          <button 
            onClick={() => navigate("/login")}
            className="w-full bg-gray-200 text-gray-800 px-10 py-5 rounded-full font-black text-xl hover:bg-gray-300 transition-all"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;