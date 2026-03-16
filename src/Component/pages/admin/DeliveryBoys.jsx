import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTruck, FaPlus, FaTrash, FaIdCard, FaMotorcycle } from "react-icons/fa";

const DeliveryBoys = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);

  // Filter only Delivery users from the main users list
  const deliveryBoys = users?.filter(user => user.role === "Delivery") || [];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl shadow-sm">
            <FaTruck size={28} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-800 tracking-tight italic">Logistics Fleet</h1>
            <p className="text-gray-500 font-medium">Manage delivery partners and vehicle verification.</p>
          </div>
        </div>
        <button className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:bg-orange-700 transition-all active:scale-95">
          <FaPlus /> Add Rider
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">Rider Details</th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-center">Vehicle No.</th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-center">License</th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">Status</th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {deliveryBoys.map((rider) => (
              <tr key={rider.id} className="hover:bg-orange-50/20 transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400">
                      {rider.name?.charAt(0)}
                    </div>
                    <div>
                      <p className="font-black text-gray-800">{rider.name}</p>
                      <p className="text-xs text-gray-400">{rider.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center">
                  <span className="bg-gray-100 px-3 py-1 rounded-lg font-mono text-sm font-bold text-gray-700">
                    {rider.vehicleNumber || "MP-09-AB-1234"}
                  </span>
                </td>
                <td className="p-6 text-center text-gray-500 font-bold text-sm italic">
                  {rider.licenseNumber || "VERIFIED"}
                </td>
                <td className="p-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${rider.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {rider.status || "Active"}
                  </span>
                </td>
                <td className="p-6 text-right">
                  <button className="p-3 text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryBoys;