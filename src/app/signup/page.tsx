"use client";
import Button from "@/components/design-system/button";
import InputField from "@/components/design-system/form/input";
import Text from "@/components/design-system/text";
import { ButtonSize, ButtonVariant } from "@/types/button-types";
import { TextSize, TextWeight } from "@/types/text-types";
import React from "react";

const SignUp = () => {
  return (
    <div className="max-w-[560px] mx-auto text-left mt-6 p-4">
      <Text size={TextSize.Large} color="#6F8FAF" weight={TextWeight.Bold}>
        Sign Up
      </Text>
      <div className="signup-card border border-2 w-full px-4 py-6">
        <form className="flex flex-col gap-4 border-blue_denim">
          <div className="form-div first-name">
            <InputField type="string" placeholder="First Name" />
          </div>
          <div className="form-div last-name">
            <InputField type="string" placeholder="Last Name" />
          </div>
          <div className="form-div email">
            <InputField type="string" placeholder="Email" />
          </div>
          <div className="form-div password">
            <InputField type="string" placeholder="Password" />
          </div>
          <div className="form-div confirm-password">
            <InputField type="string" placeholder="confirm-password" />
          </div>
          <div className="cta signup mb-4">
            <Button
              size={ButtonSize.Medium}
              variant={ButtonVariant.Secondary}
              fullWidth={true}
            >
              Sign In
            </Button>
          </div>
        </form>
        <div className="other-options text-center mt-4">
          <div className="sign-in-option flex items-center justify-center">
            <Text color="black">Already have an account? </Text>
            <Button variant={ButtonVariant.Transparent} size={ButtonSize.None}>
              &nbsp; Login
            </Button>
          </div>
          <div className="sign-up-with-google mt-4">
            <Button variant={ButtonVariant.Secondary} size={ButtonSize.Medium}>
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
