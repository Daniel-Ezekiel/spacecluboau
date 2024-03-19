import React from "react";
import MainLayout from "../_layouts/MainLayout";
import PageTitle from "../_components/global/PageTitle";
import TopSection from "../_components/contact/TopSection";
import Contact from "../_components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Club OAU -  Space for Everyone.",
  description:
    "Space Club OAU, a Non-Profit established by a group of visionary students to promote awareness around Space, Science and Technology(SST) and to also build STEM capacity in Nigeriann Universities",
  keywords: ["Space Club OAU", "Space Club", "Space Education in Nigerian"],
  authors: [{ name: "Daniel", url: "https://danielezekiel.vercel.app" }],
  creator: "Daniel B. Ezekiel",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: "/logo-black.webp",
    url: "/contact",
    type: "website",
    title: "About - Space Club OAU",
    description:
      "If you want to learn about Space, its exploration, current news about Space or even Drones, General Aviation and Rocketry.We at Space Club are available to discuss these subjects, including your growth goals as a member.",
  },
  icons: {
    icon: [
      { url: "/logo-black.webp" },
      new URL("/logo-black.webp", "https://spaceclub-oau.vercel.app"),
      { url: "/logo-white.webp", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/logo-black.webp"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us -Space Club OAU",
    description:
      "If you want to learn about Space, its exploration, current news about Space or even Drones, General Aviation and Rocketry.We at Space Club are available to discuss these subjects, including your growth goals as a member.",
    // siteId: '1467726470533754880',
    creator: "Daniel B. Ezekiel",
    // creatorId: '1467726470533754880',
    images: ["https://spaceclub-oau.vercel.app/logo-black.webp"], // Must be an absolute URL
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
};

export default function page() {
  return (
    <MainLayout>
      <PageTitle title='Contact' />
      <TopSection />
      <Contact />
    </MainLayout>
  );
}
