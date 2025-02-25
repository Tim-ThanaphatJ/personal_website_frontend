import "./globals.scss";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Tim | Engineer & Cloud Enthusiast",
  description: "Data Engineer, Software Developer, and AWS Cloud Enthusiast.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
