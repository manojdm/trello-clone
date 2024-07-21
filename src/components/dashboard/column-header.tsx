import React from "react";

const ColumnHeader = ({ children }: { children: string }) => {
  return <div className="w-full p-2 bg-blue_denim text-white">{children}</div>;
};

export default ColumnHeader;
