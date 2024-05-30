"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // Check if session has data
    if (session?.user) {
      // Redirect to homepage
      router.push("/");
    }
  }, [session, router]);

  console.log("This is logged in user data", session);

  return (
    <div className=" flex  items-center justify-center my-3">
      <div className=" w-[90%] md:w-[45%] border border-gray-500 rounded-md py-3 px-3">
        <div>
          <h1 className=" text-xl md:text-2xl font-semibold text-gray-500 text-center ">
            Sign in
          </h1>

          <div className=" flex items-center justify-center my-1">
            <button
              onClick={() => signIn()}
              className=" bg-gray-900 text-white font-semibold text-sm w-[90%] py-2 rounded-md"
            >
              LOGIN WITH OAUTH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
