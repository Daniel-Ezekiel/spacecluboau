import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
// const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Club OAU -  Space for Everyone.",
  description:
    "Space Club OAU, a Non-Profit established by a group of visionary students to promote awareness around Space, Science and Technology(SST) and to also build STEM capacity in Nigeriann Universities",
  keywords: ["Space Club OAU", "Space Club", "Space Education in Nigerian"],
  authors: [{ name: "Daniel", url: "https://danielezekiel.vercel.app" }],
  creator: "Daniel B. Ezekiel",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/" },
  openGraph: {
    images: "/logo-black.webp",
    url: "/",
    type: "website",
    title: "Home - Space Club OAU",
    description:
      "Space Club OAU, a Non-Profit established by a group of visionary students to promote awareness around Space, Science and Technology(SST) and to also build STEM capacity in Nigeriann Universities",
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
    title: "Space Club OAU",
    description:
      "Space Club OAU, a Non-Profit established by a group of visionary students to promote awareness around Space, Science and Technology(SST) and to also build STEM capacity in Nigerian Universities",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`max-w-screen ${manrope.className} md:text-lg`}>
        {children}
      </body>
    </html>
  );
}

