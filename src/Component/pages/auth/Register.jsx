import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUser, FaStore, FaTools, FaTruck, FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { 
  registerVendor, 
  registerProfessional, 
  registerDriver, 
  registerUser 
} from "../../../services_api/features/auth/authThunks";

const Register = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  
  const roleFromState = location.state?.role || "user";
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: { role: roleFromState }
  });

  const selectedRole = watch("role");

   const onSubmit = async (data) => {
  try {
    let action;

    switch (selectedRole) {
      case "vendor":
        action = registerVendor(data);
        break;
      case "professional":
        action = registerProfessional(data);
        break;
      case "delivery":
        action = registerDriver(data);
        break;
      default:
        action = registerUser(data);
    }

    const res = await dispatch(action).unwrap();

    if (role === "Vendor") navigate("/vendor-dashboard");
    else if(role === "Professionals") navigate("professional-dashboard");
    else if (role === "Delivery") navigate("/delivery-dashboard");
    else navigate("/user-dashboard");
    
  } catch (error) {
    console.error("Registration error:", error);
  }
};

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4 md:p-10">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        <div className={`hidden md:flex md:w-1/3 p-10 flex-col justify-between text-white 
          ${selectedRole === 'vendor' ? 'bg-emerald-600' : 
            selectedRole === 'professional' ? 'bg-purple-600' : 
            selectedRole === 'delivery' ? 'bg-orange-600' : 'bg-indigo-600'}`}>
          <div>
            <button onClick={() => navigate("/")} className="mb-8 flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100 transition">
              <FaArrowLeft /> Back to Home
            </button>
            <h2 className="text-3xl font-black mb-4 capitalize">{selectedRole}</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Complete your profile to start transacting on the Minjuuan mediator platform.
            </p>
          </div>
          <div className="text-4xl opacity-20 self-end">
            {selectedRole === 'vendor' && <FaStore />}
            {selectedRole === 'professional' && <FaTools />}
            {selectedRole === 'delivery' && <FaTruck />}
            {selectedRole === 'user' && <FaUser />}
          </div>
        </div>

        <div className="flex-1 p-8 md:p-12 lg:p-16">
          <div className="max-w-md mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-black text-gray-800">Create Account</h1>
              <p className="text-gray-400 mt-2 font-medium">Join as a <span className="text-gray-800 font-bold capitalize">{selectedRole}</span></p>
            </header>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="text-xs uppercase font-black text-gray-400 ml-1 mb-2 block">Full Name</label>
                  <input {...register("name", { required: true })} className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl border-none focus:ring-2 ring-indigo-500 transition-all outline-none" placeholder="Enter name" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-black text-gray-400 ml-1 mb-2 block">Email</label>
                    <input {...register("email", { required: true })} type="email" className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl border-none focus:ring-2 ring-indigo-500 transition-all outline-none" placeholder="email@minzwan.com" />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-black text-gray-400 ml-1 mb-2 block">Phone</label>
                    <input {...register("phone", { required: true })} className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl border-none focus:ring-2 ring-indigo-500 transition-all outline-none" placeholder="+91..." />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-black text-gray-400 ml-1 mb-2 block">Password</label>
                  <input {...register("password", { required: true })} type="password" className="w-full px-5 py-3.5 bg-gray-100 rounded-2xl border-none focus:ring-2 ring-indigo-500 transition-all outline-none" placeholder="••••••••" />
                </div>
              </div>

              {selectedRole === "vendor" && (
                <div className="pt-4 border-t border-gray-100 mt-6 grid grid-cols-1 gap-4 animate-in fade-in duration-500">
                  <input {...register("shopname")} className="w-full px-5 py-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 outline-none" placeholder="Shop Name" />
                  <input {...register("gstin")} className="w-full px-5 py-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 outline-none" placeholder="GSTIN (Optional)" />
                  <textarea {...register("shopaddress")} className="w-full px-5 py-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 outline-none" placeholder="Full Shop Address" rows="2"></textarea>
                </div>
              )}

              {selectedRole === "professional" && (
                <div className="pt-4 border-t border-gray-100 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-bottom-2">
                  <input {...register("profession")} className="w-full px-5 py-3.5 bg-purple-50 rounded-2xl border border-purple-100 outline-none" placeholder="e.g. Electrician" />
                  <input {...register("experience")} className="w-full px-5 py-3.5 bg-purple-50 rounded-2xl border border-purple-100 outline-none" placeholder="Experience (Yrs)" />
                  <input {...register("serviceArea")} className="w-full sm:col-span-2 px-5 py-3.5 bg-purple-50 rounded-2xl border border-purple-100 outline-none" placeholder="Service City / Pin Code" />
                </div>
              )}

              {selectedRole === "delivery" && (
                <div className="pt-4 border-t border-gray-100 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-bottom-2">
                  <input {...register("vehicleNumber")} className="w-full px-5 py-3.5 bg-orange-50 rounded-2xl border border-orange-100 outline-none" placeholder="Vehicle Reg No." />
                  <input {...register("licenseNumber")} className="w-full px-5 py-3.5 bg-orange-50 rounded-2xl border border-orange-100 outline-none" placeholder="License Number" />
                </div>
              )}

              <button type="submit" className="w-full bg-gray-800 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-black transition-all transform active:scale-95 mt-6">
                Register as {selectedRole}
              </button>

              <p className="text-center text-sm text-gray-400 mt-6 font-medium">
                Already have an account? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;