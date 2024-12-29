"use client";
import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../config/firebase";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const auth = getAuth(app);
  const router = useRouter();

  const handleGoogleSignin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      router.push("/upload");
      console.log("User signed up:", user);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };
  const anicontainer = useRef<HTMLDivElement>(null);
  const storedMode = localStorage.getItem("theme");

  const [mode, setMode] = useState(storedMode);

  useEffect(() => {
    console.log(mode);

    if (anicontainer.current) {
      const animationInstance = lottie.loadAnimation({
        container: anicontainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: `${mode === "light" ? "/Ani3.json" : "/Ani3white.json"}`,
      });

      return () => {
        animationInstance.destroy();
      };
    }
  }, [mode]);

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center justify-center">
        <p className="text-3xl font-bold">AndroidArmour</p>
      </aside>

      <aside className="flex items-center gap-5">
        <Button
          className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
          onClick={handleGoogleSignin}
        >
          Login
        </Button>
      </aside>
    </header>
  );
};
export default Navbar;
