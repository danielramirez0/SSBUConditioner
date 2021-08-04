import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { generateJWT } from "../../services/user";

const initialState = {
  authenticated: localStorage.getItem("token") ? true : false,
  jwt: localStorage.getItem("token"),
  status: "idle",
  headers: {
    userId: localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token"))._id : null,
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("token"),
  },
};

// export const getJWT = createAsyncThunk("login/generateJWT", async (credentials) => {
//   const response = await generateJWT(credentials);
//   return response.data;
// });

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.authenticated = false;
      state.jwt = localStorage.removeItem("token");
    },
    setJWT: (state, action) => {
      state.authenticated = true;
      state.jwt = action.payload;
    },
    setHeaders: (state, action) => {
      state.headers = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(getJWT.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(getJWT.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.jwt = action.payload;
  //       state.authenticated = true;
  //     })
  //     .addCase(getJWT.rejected, (state) => {
  //       state.status = "failed";
  //     });
  // },
});

export const { logout, setJWT, setHeaders, setUser } = loginSlice.actions;

export const selectAuth = (state) => state.login.authenticated;
export const selectJWT = (state) => state.login.jwt;
export const selectHeader = (state) => state.login.headers;
export const selectUser = (state) => state.login.user;

export default loginSlice.reducer;
