"use client";
import React, { useLayoutEffect } from "react";
import Header from "../_components/global/Header";
import Footer from "../_components/global/Footer";
import { NavContext } from "@/context/navContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  const updateShowNav = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };

  useLayoutEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showNav]);

  return (
    <NavContext.Provider value={{ navState: showNav, updateShowNav }}>
      <div className={`flex flex-col`}>
        <Header />
        <main className='flex flex-col'>{children}</main>
        <Footer />
      </div>
    </NavContext.Provider>
  );
}
