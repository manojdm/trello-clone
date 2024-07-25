"use client";
import React, { useEffect, useState } from "react";
import Text from "./design-system/text";
import Button from "./design-system/button";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import { TextSize } from "@/types/text-types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "@/store/hooks";
import { setUserLogout } from "@/store/slices/auth/signin/slice";
import { signOut } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState<string>("Sign in");
  const signin = useSelector((state: RootState) => state.signin);

  useEffect(() => {
    if (signin.authenticated) {
      setButtonText("LOG OUT");
    }
  }, [signin.authenticated]);

  const handleButtonAction = (e: MouseEvent) => {
    e.preventDefault();
    if (signin.authenticated) {
      window?.localStorage?.clear();
      dispatch(setUserLogout());
      signOut();
      router.push("/signin");
    } else {
      router.push("signin");
    }
  };

  return (
    <>
      <div className="header p-4 bg-blue_denim text-white">
        <div className="flex items-center justify-between">
          <Text size={TextSize.Large}>Trello</Text>
          <Button
            variant={ButtonVariant.Primary}
            size={ButtonSize.Medium}
            onClick={handleButtonAction}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
