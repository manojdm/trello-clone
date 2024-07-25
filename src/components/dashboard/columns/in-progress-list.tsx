import React from "react";
import ColumnHeader from "../column-header";
import TodoCard from "../todo-card";
import { iTasksType } from "@/types/interfaces";
import Draggable from "@/components/dnd-kit/draggable";

const InProgressList = ({ tasks }: { tasks: iTasksType[] }) => {
  return (
    <div className="todo-column-list p-3 border border-2 shadow flex-1 w-full">
      <ColumnHeader>IN PROGRESS</ColumnHeader>
      <div className="todo-cards flex flex-col gap-3 my-3">
        {tasks.length > 0 &&
          tasks?.map((task) => (
            <Draggable key={task._id} id={task._id as string}>
              <TodoCard task={task} />{" "}
            </Draggable>
          ))}
      </div>
    </div>
  );
};

export default InProgressList;
