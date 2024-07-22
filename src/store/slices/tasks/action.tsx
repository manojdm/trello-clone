import { AppDispatch, RootState } from "@/store/store";
import { iTasksType } from "@/types/interfaces";
import { setTasksData, setTasksFail, setTasksLoader } from "./slice";
import { TasksService } from "@/service/Tasks";

export const createTask =
  (Task: iTasksType) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(setTasksLoader());

      const data = await TasksService.createTasks(
        Task,
        getState().signin.userData?.token
      );

      dispatch(setTasksData(data));
    } catch (e: any) {
      dispatch(setTasksFail(e.response?.data?.message));
    }
  };

export const getTasks =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(setTasksLoader());

      const data = await TasksService.getTasks(
        getState().signin.userData?.token
      );

      dispatch(setTasksData(data));
    } catch (e: any) {
      dispatch(setTasksFail(e.response?.data?.message));
    }
  };

export const updateTask =
  (Task: iTasksType) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(setTasksLoader());

      const data = await TasksService.updateTask(
        Task,
        getState().signin.userData?.token
      );

      dispatch(setTasksData(data));
    } catch (e: any) {
      dispatch(setTasksFail(e.response?.data?.message));
    }
  };

export const deleteTask =
  (task: iTasksType) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(setTasksLoader());

      const data = await TasksService.deleteTask(
        task._id,
        getState().signin.userData?.token
      );

      dispatch(setTasksData(data));
    } catch (e: any) {
      dispatch(setTasksFail(e.response?.data?.message));
    }
  };
