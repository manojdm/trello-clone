import { useDroppable } from "@dnd-kit/core";
import React from "react";

const Droppable = ({ id, children }: any) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="droppable-div w-full">
      {children}
    </div>
  );
};

export default Droppable;
