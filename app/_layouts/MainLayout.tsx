"use client";
import React, { useLayoutEffect } from "react";
import Header from "../_components/global/Header";
import Footer from "../_components/global/Footer";
import { NavContext } from "@/context/navContext";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode='wait'>
      <NavContext.Provider value={{ navState: showNav, updateShowNav }}>
        <motion.div
          className={`flex flex-col`}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
        >
          <Header />
          <main className='flex flex-col'>{children}</main>
          <Footer />
        </motion.div>
      </NavContext.Provider>
    </AnimatePresence>
  );
}
