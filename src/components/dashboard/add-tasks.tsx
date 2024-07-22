import React, { useState } from "react";
import Button from "../design-system/button";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import TaskModal from "./columns/task-modal";
import { ModalActionTypes } from "@/types/model-action-types";
import { useDispatch } from "@/store/hooks";
import { resetLoadingStatuses } from "@/store/slices/tasks/slice";

const AddTask = () => {
  const [showTaskModel, setShowTaskModel] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="addTaskSection">
        <Button
          onClick={() => {
            setShowTaskModel(true);
            dispatch(resetLoadingStatuses());
          }}
          variant={ButtonVariant.Secondary}
          size={ButtonSize.Medium}
        >
          Add Task
        </Button>
      </div>
      {showTaskModel && (
        <TaskModal
          modelType={ModalActionTypes.CREATE}
          handleCloseState={setShowTaskModel}
        />
      )}
    </>
  );
};

export default AddTask;
