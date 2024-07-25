"use client";
import AddTask from "@/components/dashboard/add-tasks";
import DoneList from "@/components/dashboard/columns/done-list";
import InProgressList from "@/components/dashboard/columns/in-progress-list";
import TodoList from "@/components/dashboard/columns/todo-list";
import InputField from "@/components/design-system/form/input";
import Droppable from "@/components/dnd-kit/droppable";
import { useDispatch, useSelector } from "@/store/hooks";
import { getTasks, updateTask } from "@/store/slices/tasks/action";
import { RootState } from "@/store/store";
import { ColTypes } from "@/types/col-types";
import { iTasksType } from "@/types/interfaces";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const signin = useSelector((state: RootState) => state.signin);
  const tasksList = useSelector((state: RootState) => state.tasks);

  const [tasks, setTasks] = useState<iTasksType[]>([]);
  const [searchTest, setSearchText] = useState<string>("");

  useEffect(() => {
    if (!signin.authenticated) {
      router.push("/signin");
    }
  }, [signin.authenticated]);

  useEffect(() => {
    const filteredTasks = tasksList.tasks?.filter(
      (task) =>
        task?.title?.toLowerCase()?.indexOf(searchTest.toLowerCase()) !== -1
    );

    setTasks(filteredTasks);
  }, [tasks, tasksList?.tasks, searchTest]);

  useEffect(() => {
    if (
      !tasksList.isLoading &&
      !tasksList.success &&
      tasksList?.tasks?.length === 0
    ) {
      dispatch(getTasks());
    } else {
      setTasks(tasksList?.tasks);
    }
  }, [tasksList?.tasks]);

  const handleDropEnd = (event: DragEndEvent) => {
    dispatch(
      updateTask({
        _id: event.active?.id as string,
        status: event.over?.id as ColTypes,
      })
    );
  };

  return (
    <div className="dashboard p-4">
      <AddTask />
      <div className="searchBarSection my-6">
        <div className="border px-3 py-2 shadow-sm">
          <span className="searchText">Search: </span>
          <InputField
            type="string"
            placeholder="Search by title...."
            className="px-8 lg:!w-96 ml-3"
            value={searchTest}
            onChange={setSearchText}
          />
        </div>
      </div>
      <div className="trelloBoard flex flex-col lg:!flex-row items-start justify-between gap-6">
        {tasksList?.tasks?.length > 0 && (
          <DndContext onDragEnd={handleDropEnd}>
            <Droppable id={ColTypes.CREATED}>
              <TodoList
                tasks={tasks?.filter(
                  (task) => task.status === ColTypes.CREATED
                )}
              />
            </Droppable>
            <Droppable id={ColTypes.INPROGRESS}>
              <InProgressList
                tasks={tasks?.filter(
                  (task) => task.status === ColTypes.INPROGRESS
                )}
              />
            </Droppable>
            <Droppable id={ColTypes.DONE}>
              <DoneList
                tasks={tasks?.filter((task) => task.status === ColTypes.DONE)}
              />
            </Droppable>
          </DndContext>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
