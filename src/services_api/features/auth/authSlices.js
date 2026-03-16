import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  getUsers,
  updateProfile,
  registerVendor,
  registerDriver,
  getDrivers,
  registerProfessional,
  getProfessionals,
} from "./authThunks";

const getInitialUser = () => {
  const savedUser = localStorage.getItem("user");
  try {
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  user: getInitialUser(),
  drivers: [], // This holds the Drivers list....
  users: [], // This holds the list for your Admin Dashboards
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.users = [];
      localStorage.removeItem("user");
      // Standard cleanup for the manual cookie we set
      document.cookie =
        "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    },
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 🔹 Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload?.user || null;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // 🔹 Get Users (List for Admin Dashboards)
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

            // 🔹 Get Users (List for Drivers Dashboards)
      .addCase(getDrivers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDrivers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.drivers = payload.data.data;
        console.log("this is the payload from the Driver slice", payload.data.data)
      })
      .addCase(getDrivers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // 🔹 Update Profile (Self)
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload?.user || state.user;
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(getProfessionals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfessionals.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.professionals = payload;
      })
      .addCase(getProfessionals.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      /* ================= ADMIN REGISTRATION ACTIONS ================= */
      /* These update the 'users' list but do NOT change the 'user' (Admin) */

      /* ================= ADMIN REGISTRATION MATCHERS ================= */

      // 1. PENDING: Start the loading spinner and clear old errors
      //=========================================================================================
      .addMatcher(
        (action) =>
          [
            registerVendor.pending,
            registerDriver.pending,
            registerProfessional.pending,
          ].includes(action.type),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )

      .addMatcher(
        (action) =>
          [
            registerVendor.fulfilled,
            registerDriver.fulfilled,
            registerProfessional.fulfilled,
          ].includes(action.type),
        (state, { payload }) => {
          state.loading = false;
          const newUser = payload?.user;

          if (newUser) {
            state.users = [newUser, ...state.users];

            const role = newUser.role?.toLowerCase();
            if (role === "vendor")
              state.vendors = [newUser, ...(state.vendors || [])];
            if (role === "delivery" || role === "driver")
              state.deliveryBoys = [newUser, ...(state.deliveryBoys || [])];
            if (role === "professional")
              state.professionals = [newUser, ...(state.professionals || [])];
          }
        },
      )

      .addMatcher(
        (action) =>
          [
            registerVendor.rejected,
            registerDriver.rejected,
            registerProfessional.rejected,
          ].includes(action.type),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        },
      );
    //=============================================================================================
  },
});

export const { logoutUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;

// // Inside your authSlice.js extraReducers:

// .addCase(getMe.pending, (state) => {
//   state.loading = true;
// })
// .addCase(getMe.fulfilled, (state, { payload }) => {
//   state.loading = false;
//   // This puts the user back into Redux state after a refresh
//   state.user = payload?.user || payload;
// })
// .addCase(getMe.rejected, (state) => {
//   state.loading = false;
//   state.user = null;
//   // If the token is invalid/expired, clear the cookie
//   document.cookie =
//     "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
// })
