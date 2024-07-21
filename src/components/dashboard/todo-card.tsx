import React from "react";
import Text from "../design-system/text";
import { TextSize, TextWeight } from "@/types/text-types";
import Button from "../design-system/button";
import { ButtonSize, ButtonVariant } from "@/types/button-types";

interface iTodoCard {
  title: string;
  description?: string;
  createdAt: string;
}

const TodoCard = ({ title, description, createdAt }: iTodoCard) => {
  return (
    <div className="bg-blue_cerulean_forest py-3 px-2 min-h-[160px] flex flex-col items-start justify-between">
      <div className="header">
        <div className="title">
          <Text size={TextSize.Medium} weight={TextWeight.Bold} color="white">
            {title}
          </Text>
        </div>
        <div className="description">
          <Text size={TextSize.Small} weight={TextWeight.Normal} color="white">
            {description}
          </Text>
        </div>
      </div>
      <div className="footer w-full">
        <div className="timestamp my-2">
          <Text size={TextSize.Small} weight={TextWeight.Normal} color="white">
            Created at: {createdAt}
          </Text>
        </div>
        <div className="actions ml-auto flex gap-2 justify-end">
          <Button size={ButtonSize.ExtraSmall} variant={ButtonVariant.Warning}>
            Delete
          </Button>
          <Button
            size={ButtonSize.ExtraSmall}
            variant={ButtonVariant.Secondary}
          >
            Edit
          </Button>
          <Button size={ButtonSize.ExtraSmall}>View Details</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
