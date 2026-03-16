import React from 'react';
import { useNavigate } from 'react-router-dom';
import Vendors from '../../../../public/Vendors.png'

const VendorDashboard = () => { 
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-10 flex flex-col md:flex-row items-center gap-12 bg-emerald-50">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold text-emerald-900 leading-tight">
            Grow your business with <br /> <span className="italic">Minzwan Marketplace</span>
          </h1>
          <p className="text-lg text-emerald-700">
            Reach thousands of customers, manage inventory effortlessly, and scale your brand with our powerful vendor tools.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/register', { state: { role: 'vendor' } })}
              className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-800 transition shadow-lg"
            >
              Start Selling Today
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition"
            >
              Vendor Login
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src={Vendors}
            alt="Vendor Dashboard" 
            className="rounded-2xl shadow-2xl border-8 border-white"
          />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-10 grid md:grid-cols-3 gap-10">
        <div className="p-8 bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-emerald-700 text-3xl mb-4">📈</div>
          <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
          <p className="text-gray-600">Track your sales, popular items, and customer behavior with a live dashboard.</p>
        </div>
        <div className="p-8 bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-emerald-700 text-3xl mb-4">📦</div>
          <h3 className="text-xl font-bold mb-2">Inventory Sync</h3>
          <p className="text-gray-600">Update stock levels across all platforms with a single click.</p>
        </div>
        <div className="p-8 bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="text-emerald-700 text-3xl mb-4">💰</div>
          <h3 className="text-xl font-bold mb-2">Fast Payouts</h3>
          <p className="text-gray-600">Receive your earnings directly to your bank account with zero delay.</p>
        </div>
      </section>
    </div>
  );
};

export default VendorDashboard;