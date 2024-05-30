"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showSideBar, setSideBar] = useState(true);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname == "/login" || pathname == "/register") {
  //     setSideBar(false);
  //   } else {
  //     setSideBar(true);
  //   }
  // }, [pathname]);
  return (
    <>
      <SessionProvider>
        <Header />
        {children}
      </SessionProvider>
    </>
  );
};

export default Layout;
