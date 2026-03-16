import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";


//LOGIN ==========================

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/user/auth/login", formData);
      const { token, user } = res.data;

      if (token && user) {
        document.cookie = `accessToken=${token}; max-age=86400; path=/; SameSite=Lax`;

        localStorage.setItem("user", JSON.stringify(user));
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    } 
  },
);

//GET ALL USER ==============================================

export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async ({ search }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/admin/users/?search=${search}`, {
        withCredentials: true,
      });
      console.log("get users :", res.data.data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  },
);


// USER THUNK=======================================================================================================================
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => { 
    try {
      const res = await axiosInstance.post("/admin/user/create", formData);
      const { token, user } = res.data;

      if (token && user) {
        document.cookie = `accessToken=${token}; max-age=86400; path=/; SameSite=Lax`;

        localStorage.setItem("user", JSON.stringify(user));
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Registration Failed");
    }
  }
);





// VENDOR THUNK ==========================================================================================================

export const registerVendor = createAsyncThunk(
  "auth/registerVendor",
  async (formData, { rejectWithValue }) => { 
    try {
      const res = await axiosInstance.post("/admin/vendor/create", formData);
      const { token, user } = res.data;

      if (token && user) {
        document.cookie = `accessToken=${token}; max-age=86400; path=/; SameSite=Lax`;

        localStorage.setItem("user", JSON.stringify(user));
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Registration Failed");
    }
  }
);


// DRIVER THUNK===================================================================================================================


export const registerDriver = createAsyncThunk(
  "auth/registerDriver",
  async (formData, { rejectWithValue }) => { 
    try {
      const res = await axiosInstance.post("/admin/driver/create", formData);
      const { token, user } = res.data;

      if (token && user) {
        document.cookie = `accessToken=${token}; max-age=86400; path=/; SameSite=Lax`;

        localStorage.setItem("user", JSON.stringify(user));
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Registration Failed");
    }
  }
);


//PROFESSIONAL THUNK===============================================================================================================


export const registerProfessional = createAsyncThunk(
  "auth/registerProfessional",
  async (formData, { rejectWithValue }) => { 
    try {
      const res = await axiosInstance.post("/admin/professional/create", formData);
      
      
      return res.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Registration Failed");
    }
  }
);

export const getProfessionals = createAsyncThunk(
  "auth/getProfessionals",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/admin/professionals");
      return res.data; 
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch experts");
    }
  }
);


export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ id, sts, formData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.put(
        `/admin/users/${id}/${sts}`,
        formData,
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  },
);



  // export const loginUser = createAsyncThunk(
    //   "auth/loginUser",
  //   async (formData, { rejectWithValue }) => {
  //     try {
  //       const res = await axiosInstance.post("/user/auth/login", formData);
  //       return res.data;
  //     } catch (err) {
    //       return rejectWithValue(err.response?.data?.message || err.message);
  //     }
  //   }
  // );
  // export const verifyUserOtp = createAsyncThunk("auth/verifyUserOtp", async (formData, { rejectWithValue }) => {
  //   try {
  //     const res = await axiosInstance.post("/client/auth/verify-otp", formData);
  //     return res.data;
  //   } catch (err) {
  //     return rejectWithValue(err.response?.data?.message || err.message);
  //   }
  // });
  // export const getMe = createAsyncThunk(
  //   "auth/getMe",
  //   async (_, { rejectWithValue }) => {
  //     try {
  //       const res = await axiosInstance.get("/admin/getme");
  //       console.log(res.data.data);
  //       return res.data;
  //     } catch (err) {
  //       return rejectWithValue(err.message);
  //     }
  //   },
  // );