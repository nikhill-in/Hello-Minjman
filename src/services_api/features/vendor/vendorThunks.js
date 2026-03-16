import axiosInstance from "../../api/axiosInstance";


export const registerVendor = createAsyncThunk(
  "register/vendor",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/vendor/auth/register",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      return response.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);