import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../services_api/features/auth/authThunks.js";
import { FaUsers, FaUserShield, FaTrash, FaEdit, FaCircle, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  
  // Accessing the state based on your backend return: { totalItems, data, totalPages, currentPage }
  const { users, loading } = useSelector((state) => state.auth);
  
  const { 
    data: user = [], 
    totalPages = 1, 
    currentPage = 1, 
    totalItems = users.length, 
  } = users || {};
  console.log(totalItems,"no. of users in admin api")
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState("");
  console.log(searchTerm,page,roleFilter,"Admin dashboard...")

  useEffect(() => {
    dispatch(getUsers({ 
      search: searchTerm, 
      page: page, 
      limit: 10, 
      role: roleFilter 
    }));
  }, [dispatch, searchTerm, page, roleFilter]);

  const activeUsers = user?.filter(u => u.status === 'ACTIVE').length || 0;
  console.log(user,"user of users");
  console.log(users,"users from admin");
  console.log(activeUsers,"how many are active");

  return (
    <div className="w-full max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-800 uppercase italic">System Overview</h1>
          <p className="text-gray-500 font-medium">Managing {totalItems} total users</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4 min-w-[200px]">
            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl"><FaUsers size={20}/></div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Database Count</p>
              <p className="text-2xl font-black text-gray-800">{totalItems}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4 min-w-[200px]">
            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-xl"><FaUserShield size={20}/></div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active (Current Page)</p>
              <p className="text-2xl font-black text-gray-800">{activeUsers}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search name, email, or phone..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 ring-indigo-500 outline-none font-bold"
            onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
          />
        </div>
        <select 
          className="bg-white border border-gray-100 px-6 py-4 rounded-2xl shadow-sm font-bold text-gray-600 outline-none"
          onChange={(e) => { setRoleFilter(e.target.value); setPage(1); }}
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Vendor">Vendor</option>
          <option value="Delivery">Delivery</option>
        </select>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-20 text-center uppercase font-black text-gray-400 tracking-widest">Loading...</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="p-6 text-xs font-black uppercase text-gray-400">User</th>
                    <th className="p-6 text-xs font-black uppercase text-gray-400">Role</th>
                    <th className="p-6 text-xs font-black uppercase text-gray-400">Status</th>
                    <th className="p-6 text-xs font-black uppercase text-gray-400 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {user.map((u) => (
                    <tr key={u.id} className="hover:bg-gray-50/50 group transition-all">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                            {u.name?.charAt(0)}
                          </div>
                          <div>
                            <p className="font-black text-gray-800">{u.name}</p>
                            <p className="text-xs text-gray-400 font-bold">{u.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 uppercase text-[10px] font-black tracking-widest text-gray-500">{u.role}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${u.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white"><FaEdit /></button>
                          <button className="p-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white"><FaTrash /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-gray-50 flex items-center justify-between border-t">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                Page {currentPage} / {totalPages}
              </p>
              <div className="flex gap-2">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setPage(currentPage - 1)}
                  className="p-3 bg-white border rounded-xl disabled:opacity-30"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setPage(currentPage + 1)}
                  className="p-3 bg-white border rounded-xl disabled:opacity-30"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;