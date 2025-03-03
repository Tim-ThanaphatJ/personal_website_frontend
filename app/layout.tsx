import "./globals.scss";
import { Inter } from "next/font/google";
import Providers from "./providers";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading"; // Import the loading component

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tim | Engineer & Cloud Enthusiast",
  description: "Data Engineer, Software Developer, and AWS Cloud Enthusiast.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
