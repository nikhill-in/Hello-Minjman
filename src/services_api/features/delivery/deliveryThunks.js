export const registerDeliveryBoy = createAsyncThunk(
  "auth/registerDeliveryBoy",
  async (formData, { rejectWithValue }) => { 
    try {
      const res = await axiosInstance.post("/delivery/auth/register", formData);
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
