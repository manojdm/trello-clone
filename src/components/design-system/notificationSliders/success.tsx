"use client";
import React, { useEffect, useState } from "react";
import { BiMessageCheck } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import Text from "../text";

export const SuccessMessage = ({
  message,
  handleButtonClick,
}: {
  message: string;
  handleButtonClick: any;
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const duration = 8000;

    const interval = setInterval(() => {
      setProgress((progress) => {
        if (progress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return progress + 0.5;
      });
    }, 50);
  }, []);

  return (
    <div className="fixed right-0 top-8 max-w-md m-4 bg-green-600 animate-slideIn">
      <div className="flex items-start justify-between gap-6 p-6 text-white">
        <div className="flex-shrink-0">
          <BiMessageCheck size={24} />
        </div>
        <div className="flex-grow">
          <Text>{message}</Text>
        </div>
        <div onClick={handleButtonClick} className="cursor-pointer">
          <MdOutlineClose size={24} />
        </div>
      </div>
      <div className="h-1 bg-white" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default SuccessMessage;
