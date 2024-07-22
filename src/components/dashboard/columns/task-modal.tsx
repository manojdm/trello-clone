import Button from "@/components/design-system/button";
import InputField from "@/components/design-system/form/input";
import ErrorMessage from "@/components/design-system/notificationSliders/error";
import SuccessMessage from "@/components/design-system/notificationSliders/success";
import Text from "@/components/design-system/text";
import { useDispatch, useSelector } from "@/store/hooks";
import { createTask, updateTask } from "@/store/slices/tasks/action";
import { resetLoadingStatuses } from "@/store/slices/tasks/slice";
import { AppState } from "@/store/store";
import { ButtonVariant } from "@/types/button-types";
import { ColTypes } from "@/types/col-types";
import { iTasksType } from "@/types/interfaces";
import { ModalActionTypes } from "@/types/model-action-types";
import { TextSize, TextWeight } from "@/types/text-types";
import React, { useEffect, useState } from "react";

interface iTaskModal {
  modelType: ModalActionTypes;
  task?: iTasksType;
  handleCloseState: any;
}

const TaskModal = ({ modelType, task, handleCloseState }: iTaskModal) => {
  const [title, setTitle] = useState(task?.title);
  const [description, setDescription] = useState(task?.description);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  const tasks = useSelector((state: AppState) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks.success) {
    }
  }, [tasks]);

  const handleCreate = () => {
    dispatch(
      createTask({
        title,
        description,
        status: ColTypes.CREATED,
      })
    );
    setShowNotificationModal(true);
  };

  const handleEdit = () => {
    dispatch(
      updateTask({
        _id: task?._id,
        title,
        description,
      })
    );
    setShowNotificationModal(true);
  };

  const handleModalClose = () => {
    setShowNotificationModal(false);
    dispatch(resetLoadingStatuses());
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black_semi_transparent z-2 flex items-center justify-center">
        <div className="modal-card bg-white max-w-[460px] w-[90vw] mx-auto max-h-[70vh] overflow-auto rounded p-4">
          <div className="heading">
            <Text size={TextSize.Medium} color="black" weight={TextWeight.Bold}>
              {modelType == ModalActionTypes.CREATE
                ? "Create Task"
                : modelType == ModalActionTypes.UPDATE
                ? "Update Task"
                : "Task Details"}
            </Text>
          </div>
          <div className="body flex-col justify-between">
            <div className="task-items mt-6 flex flex-col gap-4">
              <div className="item">
                <div className="title">
                  <Text size={TextSize.Small} color="black">
                    Title
                  </Text>
                </div>
                <div className="content">
                  <InputField
                    value={title}
                    disabled={modelType == ModalActionTypes.VIEW}
                    onChange={setTitle}
                  />
                </div>
              </div>
              <div className="item">
                <div className="description">
                  <Text size={TextSize.Small} color="black">
                    Description
                  </Text>
                </div>
                <div className="content">
                  <textarea
                    value={description}
                    className="border border-1 w-full min-h-[220px] p-1"
                    disabled={modelType == ModalActionTypes.VIEW}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="action-items mt-6 text-right">
              {modelType == ModalActionTypes.VIEW ? (
                <Button
                  variant={ButtonVariant.Secondary}
                  onClick={() => handleCloseState(false)}
                >
                  Close
                </Button>
              ) : modelType == ModalActionTypes.UPDATE ? (
                <>
                  <Button
                    variant={ButtonVariant.Secondary}
                    onClick={handleEdit}
                  >
                    Save
                  </Button>
                  <Button
                    variant={ButtonVariant.Warning}
                    onClick={() => handleCloseState(false)}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleCreate}
                    variant={ButtonVariant.Secondary}
                  >
                    Create
                  </Button>
                  <Button
                    variant={ButtonVariant.Warning}
                    onClick={() => handleCloseState(false)}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {showNotificationModal && tasks.success ? (
        <SuccessMessage
          message={"Task Created!"}
          handleButtonClick={handleModalClose}
        />
      ) : (
        showNotificationModal && (
          <ErrorMessage
            message={tasks?.errorMessage}
            handleButtonClick={handleModalClose}
          />
        )
      )}
    </>
  );
};

export default TaskModal;
