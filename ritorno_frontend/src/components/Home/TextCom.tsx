"use client";

import React from "react";
import ShimmerButton from "@/components/ui/shimmer-button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../config/firebase";
import { useRouter } from "next/navigation";

const TextCom = () => {
  const auth = getAuth(app);
  const router = useRouter();

  const handleGoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed up:", user);
      router.push("/upload");
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-[30rem] md:mt-[-50px]">
      <div className="z-10 flex min-h-64 items-center justify-center">
        <ShimmerButton className="shadow-2xl" onClick={handleGoogleSignin}>
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Sign in
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
};

export default TextCom;
