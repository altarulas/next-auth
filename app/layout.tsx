import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const backgroundColor =
  "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to bg-fuchsia-500";

export const metadata: Metadata = {
  title: "Auth App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, backgroundColor)}>{children}</body>
    </html>
  );
}
