import { postLoginUserApi, getCurrentUserApi, postRegisterUserApi } from "@/redux/api/Users";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postLoginUser = createAsyncThunk("postLoginUser", async (userData) => {
  const response = await postLoginUserApi(userData);
  return response;
});

export const postRegisterUser = createAsyncThunk("postRegisterUser", async (userData) => {
  const response = await postRegisterUserApi(userData);
  return response;
});

export const getCurrentUser = createAsyncThunk("getCurrentUser", async () => {
  return getCurrentUserApi();
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    register:null,
    currentUser:null,
    token:null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLoginUser.fulfilled, (state, action) => {
        const { user,token } = action.payload; 
        state.user = user;
        state.token = token;
      })
      .addCase(postRegisterUser.fulfilled,(state,action)=>{
         const { user } = action.payload;
         state.register = user;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) =>{
        const { user } = action.payload;
        state.currentUser = user;
      })
  },
});

export default usersSlice.reducer;
