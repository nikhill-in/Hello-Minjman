import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};




// ==============================================================================================

// const ProtectedRoute = ({ children }) => {

//   const { user } = useSelector((state) => state.auth);
//   const token = localStorage.getItem("accessToken");

//   if (!user && !token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
// ==============================================================================================
// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {

//   const token = localStorage.getItem("accessToken");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

export default ProtectedRoute;