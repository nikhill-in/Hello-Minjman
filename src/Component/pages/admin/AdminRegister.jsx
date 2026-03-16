import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  registerDriver,
  registerProfessional,
  registerVendor,
} from "../../../services_api/features/auth/authThunks";

const AdminRegister = ({ role }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let action;
      // We explicitly merge the role into the data object
      const payload = { ...data, role };

      if (role === "vendor") action = registerVendor(payload);
      else if (role === "delivery") action = registerDriver(payload);
      else if (role === "professional") action = registerProfessional(payload);

      await dispatch(action).unwrap();
      alert(`New ${role} created successfully!`);
      reset();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const SKILLED_TRADES = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "Painter",
    "AC Technician",
    "Mechanic",
    "Construction Worker",
    "Other Skilled Trades",
  ];
  const EXPERIENCE_LEVELS = [
    "Entry Level (0-1 Yrs)",
    "Junior (1-3 Yrs)",
    "Intermediate (3-5 Yrs)",
    "Senior (5-10 Yrs)",
    "Expert (10+ Yrs)",
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-black text-gray-800 tracking-tight capitalize">
          Register New {role}
        </h2>
        <p className="text-gray-500 font-medium">
          Adding a verified partner to the platform.
        </p>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter name"
              className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email@example.com"
              className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Phone Number
            </label>
            <input
              {...register("phone", { required: true })}
              placeholder="+91..."
              className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-indigo-500 outline-none transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
              Temp Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3.5 bg-gray-50 rounded-2xl border-none focus:ring-2 ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* ROLE SPECIFIC FIELDS - Using 'role' instead of 'selectedRole' */}
        {role === "vendor" && (
          <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-top-2">
            <input
              {...register("shopname", { required: true })}
              className="w-full px-5 py-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 outline-none"
              placeholder="Shop Name"
            />
            <input
              {...register("gstin")}
              className="w-full px-5 py-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 outline-none"
              placeholder="GSTIN (Optional)"
            />
            <textarea
              {...register("shopaddress", { required: true })}
              className="w-full px-5 py-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 outline-none"
              placeholder="Full Shop Address"
              rows="2"
            ></textarea>
          </div>
        )}

        {role === "professional" && (
          <div className="pt-6 border-t border-gray-100 mt-6 animate-in slide-in-from-bottom-2">
            <label className="text-xs font-black uppercase text-gray-400 ml-1 mb-3 block">
              Select Professions (Multiple)
            </label>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {SKILLED_TRADES.map((trade) => (
                <label
                  key={trade}
                  className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-100 rounded-xl cursor-pointer hover:bg-purple-100 transition-colors"
                >
                  <input
                    type="checkbox"
                    value={trade}
                    {...register("profession", {
                      required: "Select at least one profession",
                    })}
                    className="w-5 h-5 accent-purple-600 rounded"
                  />
                  <span className="text-sm font-bold text-purple-900">
                    {trade}
                  </span>
                </label>
              ))}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-black uppercase text-gray-400 ml-1">
                Experience Level
              </label>
              <select
                {...register("experience", {
                  required: "Select experience level",
                })}
                className="w-full px-5 py-4 bg-purple-50 rounded-2xl border border-purple-100 outline-none font-bold text-purple-900 appearance-none cursor-pointer focus:ring-2 ring-purple-500"
              >
                <option value="">Select Years...</option>
                {EXPERIENCE_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <input
              {...register("serviceArea", { required: true })}
              className="w-full mt-3 sm:col-span-2 px-5 py-3.5 bg-purple-50 rounded-2xl border border-purple-100 outline-none"
              placeholder="Service City / Pin Code"
            />
          </div>
        )}

        {role === "delivery" && (
          <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-top-2">
            <input
              {...register("vehicleNumber", { required: true })}
              className="w-full px-5 py-3.5 bg-orange-50 rounded-2xl border border-orange-100 outline-none"
              placeholder="Vehicle Reg No."
            />
            <br />
            <input
              {...register("licenseNumber", { required: true })}
              className="w-full px-5 py-3.5 bg-orange-50 rounded-2xl border border-orange-100 outline-none"
              placeholder="License Number"
            />
          </div>
        )}

        <button className="w-ful bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-indigo-700 transition-all transform active:scale-95 mt-6">
          Confirm & Create {role}
        </button>
      </form>
    </div>
  );
};

export default AdminRegister;
