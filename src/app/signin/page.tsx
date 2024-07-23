"use client";
import Button from "@/components/design-system/button";
import InputField from "@/components/design-system/form/input";
import ErrorMessage from "@/components/design-system/notificationSliders/error";
import Text from "@/components/design-system/text";
import Googlesignin from "@/components/google-signin";
import { useDispatch, useSelector } from "@/store/hooks";
import { signinUser } from "@/store/slices/auth/signin/actions";
import { RootState } from "@/store/store";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import { TextSize, TextWeight } from "@/types/text-types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const signin = useSelector((state: RootState) => state.signin);

  useEffect(() => {
    if (signin.authenticated) {
      router.push("/dashboard");
    }

    if (signin.errorMessage) {
      setErrorMessage(signin.errorMessage);
      setShowErrorMessage(true);
    }
  }, [signin]);

  const handleSignIn = (e: any) => {
    e.preventDefault();
    dispatch(signinUser({ username: username, password }));
  };

  return (
    <>
      <div className="max-w-[560px] mx-auto text-left mt-6 p-4">
        <Text size={TextSize.Large} color="#6F8FAF" weight={TextWeight.Bold}>
          Sign In
        </Text>
        <div className="signup-card border border-2 w-full px-4 py-6">
          <form className="flex flex-col gap-4 border-blue_denim">
            <div className="form-div email">
              <InputField
                type="string"
                placeholder="username"
                value={username}
                onChange={setUsername}
              />
            </div>
            <div className="form-div password">
              <InputField
                type="string"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />
            </div>
            <div className="cta signup mb-4">
              <Button
                size={ButtonSize.Medium}
                variant={ButtonVariant.Secondary}
                fullwidth={true}
                onClick={(e: any) => handleSignIn(e)}
              >
                Sign in
              </Button>
            </div>
          </form>
          <div className="other-options text-center mt-4">
            <div className="sign-in-option flex items-center justify-center">
              <Text color="black">Already have an account? </Text>
              <Button
                variant={ButtonVariant.Transparent}
                size={ButtonSize.None}
              >
                &nbsp; Sign up
              </Button>
            </div>
            <Googlesignin />
          </div>
        </div>
      </div>
      {showErrorMessage && (
        <ErrorMessage
          message={errorMessage}
          handleButtonClick={() => setShowErrorMessage(false)}
        />
      )}
    </>
  );
};

export default SignUp;
