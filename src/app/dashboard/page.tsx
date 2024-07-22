"use client";
import AddTask from "@/components/dashboard/add-tasks";
import DoneList from "@/components/dashboard/columns/done-list";
import InProgressList from "@/components/dashboard/columns/in-progress-list";
import TodoList from "@/components/dashboard/columns/todo-list";
import InputField from "@/components/design-system/form/input";
import { useDispatch, useSelector } from "@/store/hooks";
import { getTasks } from "@/store/slices/tasks/action";
import { RootState } from "@/store/store";
import { ColTypes } from "@/types/col-types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const signin = useSelector((state: RootState) => state.signin);
  const tasksList = useSelector((state: RootState) => state.tasks);

  const [tasks, setTasks] = useState<any>([]);

  useEffect(() => {
    if (!signin.authenticated) {
      router.push("/signin");
    }
  }, [signin.authenticated]);

  useEffect(() => {
    if (
      !tasksList.isLoading &&
      !tasksList.success &&
      tasksList.tasks.length === 0
    ) {
      dispatch(getTasks());
    } else {
      setTasks(tasksList?.tasks);
    }

    console.log(tasks);
  }, [tasks]);

  return (
    <div className="dashboard p-4">
      <AddTask />
      <div className="searchBarSection my-6">
        <div className="border px-3 py-2 shadow-sm">
          <span className="searchText">Search: </span>
          <InputField
            type="string"
            placeholder="Search...."
            className="px-8 lg:!w-96 ml-3"
          />
        </div>
      </div>
      <div className="trelloBoard flex flex-col lg:!flex-row items-start justify-between gap-6">
        <TodoList
          tasks={tasksList.tasks.filter(
            (task) => task.status === ColTypes.CREATED
          )}
        />
        <InProgressList
          tasks={tasksList.tasks.filter(
            (task) => task.status === ColTypes.INPROGRESS
          )}
        />
        <DoneList
          tasks={tasksList.tasks.filter(
            (task) => task.status === ColTypes.DONE
          )}
        />
      </div>
    </div>
  );
};

export default Dashboard;
