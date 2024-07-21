"use client";
import DoneList from "@/components/dashboard/columns/done-list";
import InProgressList from "@/components/dashboard/columns/in-progress-list";
import TodoList from "@/components/dashboard/columns/todo-list";
import Button from "@/components/design-system/button";
import InputField from "@/components/design-system/form/input";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard p-4">
      <div className="addTaskSection">
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Medium}>
          Add Task
        </Button>
      </div>
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
        <TodoList />
        <InProgressList />
        <DoneList />
      </div>
    </div>
  );
};

export default Dashboard;
