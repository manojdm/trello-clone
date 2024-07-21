"use client";
import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  isLoading: Boolean;
  authenticated: Boolean;
  userData: {
    _id?: string;
    username?: string;
    email?: string;
    token?: string;
  };
  errorMessage: string;
}

const storedUserData =
  typeof window !== "undefined" && localStorage.getItem("userData");

const userDataFromLocalStorage = storedUserData
  ? JSON.parse(storedUserData)
  : {};

const initialState: stateType = {
  isLoading: true,
  authenticated: userDataFromLocalStorage.token ? true : false,
  userData: userDataFromLocalStorage,
  errorMessage: "",
};

export const SigninSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setUserLoader: (state: stateType) => {
      state.isLoading = true;
      state.authenticated = false;
    },
    setUserData: (state: stateType, action) => {
      state.isLoading = false;
      state.authenticated = true;
      state.userData = action.payload;
    },
    setUserLoginFail: (state: stateType, action) => {
      state.isLoading = false;
      state.authenticated = false;
      state.userData = initialState.userData;
      state.errorMessage = action.payload;
    },
    setUserLogout: (state: stateType) => {
      state.isLoading = false;
      state.authenticated = false;
      state.userData = initialState.userData;
    },
  },
});

export const { setUserLoader, setUserData, setUserLoginFail, setUserLogout } =
  SigninSlice.actions;
SigninSlice.actions;

export default SigninSlice.reducer;
