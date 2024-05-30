"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

const Profile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // Check if session has data
    if (!session?.user) {
      // Redirect to homepage
      router.push("/");
    }
  }, [session, router]);

  return (
    <div>
      <div className=" flex items-center justify-center my-2">
        <div className=" w-[90%] md:w-[45%] h-64 bg-slate-200 flex flex-col items-center justify-center">
          <div className=" px-2 py-1 rounded-full">
            <Image
              src={session?.user?.image!}
              width={200}
              height={200}
              alt="profile-image"
              className=" w-28 h-28 rounded-full"
            />
          </div>
          <p className=" text-2xl font-semibold text-gray-500">
            Welcome,{" "}
            <span className=" text-blue-500">{session?.user?.name}</span>
          </p>
          <p className=" text-sm text-gray-500 font-semibold">
            Email: <span>{session?.user?.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
