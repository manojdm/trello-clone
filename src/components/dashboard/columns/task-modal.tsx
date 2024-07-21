import Button from "@/components/design-system/button";
import InputField from "@/components/design-system/form/input";
import Text from "@/components/design-system/text";
import { ButtonVariant } from "@/types/button-types";
import { TextSize, TextWeight } from "@/types/text-types";
import React from "react";

interface iTaskModal {
  title?: string;
  description?: string;
  disabledView?: boolean;
}

const TaskModal = ({ title, description, disabledView = true }: iTaskModal) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black_semi_transparent z-2 flex items-center justify-center">
      <div className="modal-card bg-white max-w-[460px] w-[90vw] mx-auto h-[70vh] max-h-[70vh] overflow-auto rounded p-4">
        <div className="heading">
          <Text size={TextSize.Medium} color="black" weight={TextWeight.Bold}>
            Edit Task
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
                <InputField value={title} disabled={disabledView} />
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
                  disabled={disabledView}
                />
              </div>
            </div>
          </div>
          <div className="action-items mt-6 text-right">
            {disabledView ? (
              <Button variant={ButtonVariant.Secondary}>Close</Button>
            ) : (
              <>
                <Button variant={ButtonVariant.Secondary}>Save</Button>
                <Button variant={ButtonVariant.Warning}>Cancel</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
