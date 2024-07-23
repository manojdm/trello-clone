"use client";
import Button from "@/components/design-system/button";
import InputField from "@/components/design-system/form/input";
import ErrorMessage from "@/components/design-system/notificationSliders/error";
import Text from "@/components/design-system/text";
import Googlesignin from "@/components/google-signin";
import { useDispatch, useSelector } from "@/store/hooks";
import { signupUser } from "@/store/slices/auth/signup/action";
import { RootState } from "@/store/store";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import { TextSize, TextWeight } from "@/types/text-types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const signup = useSelector((state: RootState) => state.signup);
  const signin = useSelector((state: RootState) => state.signin);

  useEffect(() => {
    if (signin.authenticated) {
      router.push("/dashboard");
    } else if (signup.accountCreated) {
      router.push("/signin");
    }
  }, [signin.authenticated, signup.accountCreated]);

  const handleSignUp = (e: MouseEvent) => {
    e.preventDefault();

    if (password === confirmPassword) {
      dispatch(
        signupUser({
          username,
          email,
          password,
        })
      );
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords aren't matching");
      setShowErrorMessage(true);
    }
  };

  return (
    <>
      <div className="max-w-[560px] mx-auto text-left mt-6 p-4">
        <Text size={TextSize.Large} color="#6F8FAF" weight={TextWeight.Bold}>
          Sign Up
        </Text>
        <div className="signup-card border border-2 w-full px-4 py-6">
          <form className="flex flex-col gap-4 border-blue_denim">
            <div className="form-div first-name">
              <InputField
                type="string"
                placeholder="UserName"
                value={username}
                onChange={setUsername}
              />
            </div>
            <div className="form-div email">
              <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={setEmail}
              />
            </div>
            <div className="form-div password">
              <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />
            </div>
            <div className="form-div confirm-password">
              <InputField
                type="password"
                placeholder="confirm-password"
                value={confirmPassword}
                onChange={setConfirmPassword}
              />
            </div>
            <div className="cta signup mb-4">
              <Button
                size={ButtonSize.Medium}
                variant={ButtonVariant.Secondary}
                fullwidth={true}
                onClick={handleSignUp}
              >
                Sign In
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
                &nbsp; Login
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
