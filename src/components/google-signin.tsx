import { ButtonSize, ButtonVariant } from "@/types/button-types";
import React, { useEffect } from "react";
import Button from "@/components/design-system/button";
import { signIn, useSession } from "next-auth/react";
import { useDispatch } from "@/store/hooks";
import { googleSignIn } from "@/store/slices/auth/signin/actions";

const Googlesignin = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(
        googleSignIn({
          username: session?.user?.email as string,
          email: session?.user?.email as string,
        })
      );
    }
  }, [session]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { callbackUrl: "/signin" });
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
