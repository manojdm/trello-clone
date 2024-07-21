import { combineReducers, configureStore } from "@reduxjs/toolkit";
import signupReducer from "./slices/auth/signup/slice";
import signinReducer from "./slices/auth/signin/slice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
  devTools: true,
});

const rootReducer = combineReducers({
  signup: signupReducer,
  signin: signinReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
