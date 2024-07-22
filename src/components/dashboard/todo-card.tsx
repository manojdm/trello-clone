import React, { useState } from "react";
import Text from "../design-system/text";
import { TextSize, TextWeight } from "@/types/text-types";
import Button from "../design-system/button";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import { iTasksType } from "@/types/interfaces";
import TaskModal from "./columns/task-modal";
import { ModalActionTypes } from "@/types/model-action-types";
import { useDispatch } from "@/store/hooks";
import { deleteTask } from "@/store/slices/tasks/action";

interface iTodoCard {
  task: iTasksType;
}

const TodoCard = ({ task }: iTodoCard) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [modalActionType, setModalActionType] = useState<ModalActionTypes>(
    ModalActionTypes.VIEW
  );

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (confirm(`Are you sure you wanna delete task ${task?.title} ?`)) {
      dispatch(deleteTask(task));
    }
  };

  const handleViewDetails = () => {
    setModalActionType(ModalActionTypes.VIEW);
    setShowTaskModal(true);
  };

  const handleEditDetails = () => {
    setModalActionType(ModalActionTypes.UPDATE);
    setShowTaskModal(true);
  };

  return (
    <>
      <div className="bg-blue_cerulean_forest py-3 px-2 min-h-[160px] flex flex-col items-start justify-between">
        <div className="header">
          <div className="title">
            <Text size={TextSize.Medium} weight={TextWeight.Bold} color="white">
              {task?.title}
            </Text>
          </div>
          <div className="description">
            <Text
              size={TextSize.Small}
              weight={TextWeight.Normal}
              color="white"
            >
              {task?.description}
            </Text>
          </div>
        </div>
        <div className="footer w-full">
          <div className="timestamp my-2">
            <Text
              size={TextSize.Small}
              weight={TextWeight.Normal}
              color="white"
            >
              Created at: {task?.status}
            </Text>
          </div>
          <div className="actions ml-auto flex gap-2 justify-end">
            <Button
              size={ButtonSize.ExtraSmall}
              variant={ButtonVariant.Warning}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              size={ButtonSize.ExtraSmall}
              variant={ButtonVariant.Secondary}
              onClick={handleEditDetails}
            >
              Edit
            </Button>
            <Button size={ButtonSize.ExtraSmall} onClick={handleViewDetails}>
              View Details
            </Button>
          </div>
        </div>
      </div>
      {showTaskModal && (
        <TaskModal
          modelType={modalActionType}
          task={task}
          handleCloseState={setShowTaskModal}
        />
      )}
    </>
  );
};

export default TodoCard;
