import React from "react";
import { FaClipboardList, FaFilter, FaCheckCircle, FaClock } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">Order Ledger</h1>
          <p className="text-gray-500 font-medium">Monitor all transactions and active mediator tasks.</p>
        </div>
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
            <button className="px-5 py-2 bg-gray-900 text-white rounded-xl text-sm font-black">All</button>
            <button className="px-5 py-2 text-gray-500 font-bold text-sm">Pending</button>
            <button className="px-5 py-2 text-gray-500 font-bold text-sm">Dispatched</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[1,2,3].map(order => (
          <div key={order} className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex items-center gap-8">
              <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black italic">#O</div>
              <div>
                <p className="text-xs font-black text-gray-400 tracking-widest uppercase">Order #MNZ-00{order}</p>
                <h3 className="text-xl font-black text-gray-800">Premium Grocery Bundle</h3>
                <p className="text-sm text-gray-500 font-medium">Customer: Anjali Verma • Total: ₹2,450</p>
              </div>
            </div>
            <div className="flex items-center gap-12">
              <div className="text-center">
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Status</p>
                <span className="flex items-center gap-2 text-orange-500 font-black italic"><FaClock /> In-Transit</span>
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 p-4 rounded-2xl text-gray-700 font-black text-sm transition-all">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;