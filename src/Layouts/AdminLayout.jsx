import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaChartPie, FaStore, FaTruck, FaUserTie, FaClipboardList, FaQuestionCircle } from "react-icons/fa";
import Footer from "../commonLayout/Footer";
import Header from "../commonLayout/Header";

const AdminLayout = () => {
  const menuItems = [
    { path: "/admin", name: "Dashboard", icon: <FaChartPie /> },
    { path: "/admin/vendors", name: "Vendors", icon: <FaStore /> },
    { path: "/admin/delivery", name: "Delivery Boys", icon: <FaTruck /> },
    { path: "/admin/professionals", name: "Professionals", icon: <FaUserTie /> },
    { path: "/admin/orders", name: "Orders", icon: <FaClipboardList /> },
    { path: "/admin/enquiries", name: "Enquiries", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
      <div className="flex-none z-50 shadow-sm">
        <Header />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-72 bg-slate-900 text-white flex flex-col shadow-xl flex-none z-40">
          <div className="p-8">
            <h2 className="text-xl font-black tracking-tighter text-indigo-400">ADMIN PANEL</h2>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Mediator Hub</p>
          </div>
          
          <nav className="flex flex-col gap-1 px-4 overflow-y-auto custom-scrollbar">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 font-bold ${
                    isActive 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" 
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-gray-50">
             <div className="max-w-7xl mx-auto">
                <Outlet />
             </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;