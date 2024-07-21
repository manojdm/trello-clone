"use client";
import React from "react";
import Text from "./design-system/text";
import Button from "./design-system/button";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import { TextSize } from "@/types/text-types";

const Header = () => {
  return (
    <div className="header p-4 bg-blue_denim text-white">
      <div className="flex items-center justify-between">
        <Text size={TextSize.Large}>Trello</Text>
        <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Header;
