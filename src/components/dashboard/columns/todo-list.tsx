import React from "react";
import ColumnHeader from "../column-header";
import TodoCard from "../todo-card";
import TaskModal from "./task-modal";
import { useSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { iTasksType } from "@/types/interfaces";

const TodoList = ({ tasks }: { tasks: iTasksType[] }) => {
  return (
    <>
      <div className="todo-column-list p-3 border border-2 shadow flex-1 w-full">
        <ColumnHeader>TODO</ColumnHeader>
        <div className="todo-cards flex flex-col gap-3 my-3">
          {tasks.length > 0 && tasks?.map((task) => <TodoCard task={task} />)}
        </div>
      </div>
    </>
  );
};

export default TodoList;
