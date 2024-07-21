import { AuthService } from "@/service/Auth";
import { AppDispatch, RootState } from "../../../store";
import { setUserData, setUserLoader, setUserLoginFail } from "./slice";
import { userData } from "@/types/interfaces";

export const signinUser =
  (userData: userData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setUserLoader());

      const data = await AuthService.signInUser(userData);

      dispatch(setUserData(data));

      localStorage.setItem("userData", JSON.stringify(data));
    } catch (e: any) {
      console.log(e);
      dispatch(setUserLoginFail(e.response?.data?.message));
    }
  };