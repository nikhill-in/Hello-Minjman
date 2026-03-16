import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../services_api/features/auth/authThunks";
import { FaLock, FaEnvelope, FaArrowRight } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await dispatch(loginUser(data)).unwrap();
      const role = res?.user?.role;
      
      if (role === "Admin") {
        navigate("/admin", { replace: true });
      } else if (role === "Vendor") {
        navigate("/vendor-dashboard");
      } else if (role === "Delivery") {
        navigate("/delivery-dashboard");
      } else if (role === "Professional") {
        navigate("/service-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Outer Card with same styling as your Info pages */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-[2.5rem] border border-gray-100 overflow-hidden mx-auto">
        
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="bg-zinc-100 text-zinc-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <FaLock size={24} />
            </div>
            <h2 className="text-3xl font-black text-gray-800 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-400 font-medium mt-2">
              Login to your <span className="text-indigo-600 font-bold">Minzwan</span> account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            
            {/* Email/Phone Field */}
            <div className="relative">
              <label className="text-xs uppercase font-black text-gray-400 ml-1 mb-2 block tracking-widest">
                Email or Phone
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <FaEnvelope />
                </div>
                <input
                  type="text"
                  placeholder="name@example.com"
                  {...register("emailOrPhone", { required: "Account info is required" })}
                  className="w-full pl-11 pr-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-indigo-500 transition-all outline-none font-medium"
                />
              </div>
              {errors.emailOrPhone && (
                <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                  {errors.emailOrPhone.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="text-xs uppercase font-black text-gray-400 ml-1 mb-2 block tracking-widest">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                  <FaLock />
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full pl-11 pr-5 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-indigo-500 transition-all outline-none font-medium"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs font-bold mt-1 ml-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group w-full bg-zinc-800 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-black transition-all transform active:scale-95 flex items-center justify-center gap-3 mt-4"
            >
              Login <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 font-medium">
              Don't have an account?{" "}
              <Link to="/" className="text-indigo-600 font-bold hover:underline transition-all">
                Join Minzwan
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle branding below the card */}
      <p className="mt-8 text-gray-400 text-sm font-medium">
        Secure mediator login • © 2026 Minzwan
      </p>
    </div>
  );
};

export default Login;