import { AppDispatch } from "@/store/store";
import { userData } from "@/types/interfaces";
import { setUserData, setUserLoader, setUserLoginFail } from "./slice";
import { AuthService } from "@/service/Auth";

export const signupUser =
  (userData: userData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUserLoader());

      const data = await AuthService.signUpUser(userData);

      dispatch(setUserData(data));
    } catch (e: any) {
      dispatch(setUserLoginFail(e.response?.data?.message));
    }
  };
