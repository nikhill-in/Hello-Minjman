import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaTrash, FaEdit, FaStore } from "react-icons/fa";
// Import your specific vendor thunks here
// import { getVendors, deleteVendor } from "../../../services_api/features/vendor/vendorThunks";

const Vendors = () => {
  const dispatch = useDispatch();
  // Assuming you create a separate slice for specialized lists
  const { vendors, loading } = useSelector((state) => state.vendors || { vendors: [] });

  useEffect(() => {
    // dispatch(getVendors());
  }, [dispatch]);

  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">Vendor Management</h1>
          <p className="text-gray-500 font-medium">Approve, monitor, and manage Minzwan shop partners.</p>
        </div>
        
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:bg-indigo-700 transition-all active:scale-95">
          <FaPlus /> Add New Vendor
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">Shop Info</th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">Owner</th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">GSTIN</th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">Status</th>
                <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                        <FaStore size={20} />
                      </div>
                      <div>
                        <p className="font-black text-gray-800">Minzwan Fresh Mart</p>
                        <p className="text-xs text-gray-400">Indore, MP</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="font-bold text-gray-700">Rajesh Kumar</p>
                    <p className="text-xs text-gray-500">rajesh@example.com</p>
                  </td>
                  <td className="p-6 font-mono text-sm text-gray-600">23AAAAA0000A1Z5</td>
                  <td className="p-6">
                    <span className="bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black uppercase">Active</span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-center gap-2">
                      <button className="p-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
                        <FaEdit />
                      </button>
                      <button className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vendors;