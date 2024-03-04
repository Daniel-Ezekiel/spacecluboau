"use client";
import { createContext } from "react";

interface NavContextProps {
  navState: boolean;
  updateShowNav: () => void;
}

export const NavContext = createContext<NavContextProps | null>(null);
