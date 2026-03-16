import React from "react";
import { FaUserTie, FaPlus, FaTrash, FaStar, FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Professionals = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl shadow-sm">
            <FaUserTie size={28} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-800 tracking-tight">
              Service Experts
            </h1>
            <p className="text-gray-500 font-medium">
              Verify skills and manage professional listings.
            </p>
          </div>
        </div>
        <button
          className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl"
          onClick={() => navigate("/admin/professionals/create")}
        >
          <FaPlus /> New Professional
        </button>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">
                Professional
              </th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-center">
                Profession
              </th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-center">
                Exp.
              </th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest">
                Rating
              </th>
              <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-widest text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-700 font-medium">
            {/* Replace with dynamic map */}
            {[1, 2].map((i) => (
              <tr key={i} className="hover:bg-purple-50/20">
                <td className="p-6 font-black text-gray-800">
                  Expert Name {i}
                </td>
                <td className="p-6 text-center italic text-purple-600 font-bold">
                  Electrician
                </td>
                <td className="p-6 text-center font-black">5 Yrs</td>
                <td className="p-6">
                  <div className="flex items-center gap-1 text-amber-500 font-black">
                    <FaStar /> 4.9
                  </div>
                </td>
                <td className="p-6 text-right">
                  <button className="p-3 text-red-500 hover:bg-red-50 rounded-xl">
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

export default Professionals;
