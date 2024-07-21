import React from "react";
import ColumnHeader from "../column-header";
import TodoCard from "../todo-card";

const DoneList = () => {
  return (
    <div className="todo-column-list p-3 border border-2 shadow flex-1 w-full">
      <ColumnHeader>DONE</ColumnHeader>
      <div className="todo-cards flex flex-col gap-3 my-3">
        <TodoCard
          title="Task 1"
          description="Description 1"
          createdAt="01/09/2024 06:30:00"
        />
      </div>
    </div>
  );
};

export default DoneList;
