import { AuthService } from "@/service/Auth";
import { AppDispatch } from "../../../store";
import { setUserData, setUserLoader, setUserLoginFail } from "./slice";
import { iUserData } from "@/types/interfaces";

export const signinUser =
  (userData: iUserData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUserLoader());

      const data = await AuthService.signInUser(userData);

      dispatch(setUserData(data));

      localStorage.setItem("userData", JSON.stringify(data));
    } catch (e: any) {
      dispatch(setUserLoginFail(e.response?.data?.message));
    }
  };


  export const googleSignIn = (userData: iUserData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUserLoader());

      const data = await AuthService.googleSignIn(userData);

      dispatch(setUserData(data));

      localStorage.setItem("userData", JSON.stringify(data));
    } catch (e: any) {
      dispatch(setUserLoginFail(e.response?.data?.message));
    }
  };