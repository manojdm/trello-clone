import React from "react";
import ColumnHeader from "../column-header";
import TodoCard from "../todo-card";
import { iTasksType } from "@/types/interfaces";
import Draggable from "@/components/dnd-kit/draggable";

const TodoList = ({ tasks }: { tasks: iTasksType[] }) => {
  return (
    <>
      <div className="todo-column-list p-3 border border-2 shadow flex-1 w-full">
        <ColumnHeader>TODO</ColumnHeader>
        <div className="todo-cards flex flex-col gap-3 my-3">
          {tasks.length > 0 &&
            tasks?.map((task) => (
              <Draggable id={task._id as string}>
                <TodoCard key={task._id} task={task} />{" "}
              </Draggable>
            ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
