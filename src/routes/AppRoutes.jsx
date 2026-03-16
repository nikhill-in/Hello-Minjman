// // import React from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import UserDashboard from "../Component/pages/users/UserDashboard";
// // import VendorDashboard from "../Component/pages/users/VendorDashboard";
// // import DeliveryDashboard from "../Component/pages/users/DeliveryDashboard";
// // import ServiceDashboard from "../Component/pages/users/ServiceDashboard";
// // import CommonDashboard from "../Component/commonDashboard";
// // import Login from "../Component/pages/auth/Login";
// // import AdminDashboard from "../Component/pages/admin/AdminDashboard";

// // const AppRoutes = () => {
// //   return (

// //       <Routes>

// //         <Route path="/" element={<CommonDashboard/>} />
// //         <Route path="/user-dashboard" element={<UserDashboard/>} />
// //         <Route path="/vendor-dashboard" element={<VendorDashboard/>} />
// //         <Route path="/delivery-dashboard" element={<DeliveryDashboard/>} />
// //         <Route path="/service-dashboard" element={<ServiceDashboard/>} />
// //         <Route path="/login" element={<Login/>}/>
// //         <Route path="/admin-dashboard" element={<AdminDashboard/>}/>

// //       </Routes>

// //   );
// // };

// // export default AppRoutes;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
// import MainLayout from "../Layouts/MainLayout";
// import CommonDashboard from "../Component/CommonDashboard.jsx";
// import Login from "../Component/pages/auth/Login.jsx";
// import AdminDashboard from "../Component/pages/admin/AdminDashboard.jsx";
// import UserDashboard from "../Component/pages/dashboards/UserDashboard.jsx";
// import AdminLayout from "../Layouts/AdminLayout.jsx";
// import Vendors from "../Component/pages/admin/Vendors.jsx";
// import Orders from "../Component/pages/admin/Orders.jsx";
// import DeliveryBoys from "../Component/pages/admin/DeliveryBoys.jsx";
// import Professionals from "../Component/pages/admin/Professionals.jsx";
// import Enquiries from "../Component/pages/admin/Enquiries.jsx";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<CommonDashboard />} />
//         <Route
//           path="/login"
//           element={
//             <PublicRoute>
//               <Login />
//             </PublicRoute>
//           }
//         />
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//       </Route>

//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute>
//             <AdminLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route index element={<AdminDashboard />} />
//         <Route path="vendors" element={<Vendors />} />
//         <Route path="delivery-boys" element={<DeliveryBoys />} />
//         <Route path="professionals" element={<Professionals />} />
//         <Route path="orders" element={<Orders />} />
//         <Route path="enquiries" element={<Enquiries />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import MainLayout from "../Layouts/MainLayout";
import AdminLayout from "../Layouts/AdminLayout";

import CommonDashboard from "../Component/CommonDashboard.jsx";

import Login from "../Component/pages/auth/Login.jsx";
import Register from "../Component/pages/auth/Register.jsx";

import AdminDashboard from "../Component/pages/admin/AdminDashboard.jsx";
import Vendors from "../Component/pages/admin/Vendors.jsx";
import Orders from "../Component/pages/admin/Orders.jsx";
import DeliveryBoys from "../Component/pages/admin/DeliveryBoys.jsx";
import Professionals from "../Component/pages/admin/Professionals.jsx";
import Enquiries from "../Component/pages/admin/Enquiries.jsx";

import UserDashboard from "../Component/pages/dashboards/UserDashboard.jsx";
import DeliveryDashboard from "../Component/pages/dashboards/DeliveryDashboard.jsx";
import VendorDashboard from "../Component/pages/dashboards/VendorDashboard.jsx";
import ServiceProvider from "../Component/pages/dashboards/ServiceProvider.jsx"

// ... existing imports
import AdminRegister from "../Component/pages/admin/AdminRegister.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<CommonDashboard />} />
        {/* Public Routes */}
        <Route path="/join/vendor" element={<VendorDashboard/>} />
        <Route path="/join/professional" element={<ServiceProvider/>} />
        <Route path="/join/delivery" element={<DeliveryDashboard/>} />
        <Route path="/join/user" element={<UserDashboard />} />
        
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      </Route>

      {/* Admin Panel */}
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        
        {/* Vendors Section */}
        <Route path="vendors">
           <Route index element={<Vendors />} />
           <Route path="create" element={<AdminRegister role="vendor" />} />
        </Route>

        {/* Delivery Section */}
        <Route path="delivery">
           <Route index element={<DeliveryBoys />} />
           <Route path="create" element={<AdminRegister role="delivery" />} />
        </Route>

        {/* Professionals Section */}
        <Route path="professionals">
           <Route index element={<Professionals />} />
           <Route path="create" element={<AdminRegister role="professional" />} />
        </Route>

        <Route path="orders" element={<Orders />} />
        <Route path="enquiries" element={<Enquiries />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;