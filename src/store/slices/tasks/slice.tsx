import { iTasksType } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  isLoading: Boolean;
  success: Boolean;
  tasks: iTasksType[];
  errorMessage: string;
}

const initialState: stateType = {
  isLoading: false,
  success: false,
  tasks: [],
  errorMessage: "",
};

export const TasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasksLoader: (state: stateType) => {
      state.isLoading = true;
      state.success = false;
    },
    setTasksData: (state: stateType, action) => {
      state.isLoading = false;
      state.success = true;
      state.tasks = action.payload;
    },
    setTasksFail: (state: stateType, action) => {
      state.isLoading = false;
      state.success = false;
      state.tasks = initialState.tasks;
      state.errorMessage = action.payload;
    },
    resetLoadingStatuses: (state: stateType) => {
      state.success = false;
      state.isLoading = false;
    },
  },
});

export const {
  setTasksLoader,
  setTasksData,
  setTasksFail,
  resetLoadingStatuses,
} = TasksSlice.actions;

export default TasksSlice.reducer;
