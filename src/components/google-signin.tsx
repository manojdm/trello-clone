import { ButtonSize, ButtonVariant } from "@/types/button-types";
import React from "react";
import Button from "@/components/design-system/button";
import { signIn, useSession } from "next-auth/react";

const Googlesignin = () => {
  const { data: session, status } = useSession();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { callbackUrl: "/" });
      if (result?.error) {
        console.error("Google sign-in error:", result.error);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <div className="sign-up-with-google mt-4">
      <Button
        variant={ButtonVariant.Secondary}
        onClick={handleGoogleSignIn}
        size={ButtonSize.Medium}
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default Googlesignin;
