import { iTasksType } from "@/types/interfaces";
import { Axios } from "../AxiosServiceWrapper";

export const TasksService = {
    createTasks: async (todoData: iTasksType, token?: string) => {
        const tasks = await Axios.Request("post", "tasks", token, todoData);
        return tasks.data;
    },
    getTasks: async (token?: string) => {
        const tasks = await Axios.Request("get", `tasks`, token);
        return tasks.data;
    },    
    updateTask: async (todoData: iTasksType, token?: string) => {
        const tasks = await Axios.Request("put", `tasks/${todoData._id}`, token, todoData);
        return tasks.data;
    },
    deleteTask: async (id?:string, token?: string) => {
        const tasks = await Axios.Request("delete", `tasks/${id}`, token);
        return tasks.data;
    },
}