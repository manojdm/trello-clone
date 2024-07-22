import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  isLoading: Boolean;
  accountCreated: Boolean;
  userData: {
    _id?: string;
    username?: string;
    email?: string;
    token?: string;
  };
  errorMessage: string;
}

const initialState: stateType = {
  isLoading: true,
  accountCreated: false,
  userData: {},
  errorMessage: "",
};

export const SignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUserLoader: (state: stateType) => {
      state.isLoading = true;
      state.accountCreated = false;
    },
    setUserData: (state: stateType, action) => {
      state.isLoading = false;
      state.accountCreated = true;
      state.userData = action.payload;
    },
    setUserLoginFail: (state: stateType, action) => {
      state.isLoading = false;
      state.accountCreated = false;
      state.userData = initialState.userData;
      state.errorMessage = action.payload;
    },
  },
});

export const { setUserLoader, setUserData, setUserLoginFail } =
  SignupSlice.actions;

export default SignupSlice.reducer;
