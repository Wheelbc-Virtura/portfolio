import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brian Wheeler | IT Systems & Infrastructure",
  description:
    "Portfolio of Brian Wheeler: IT support, systems, infrastructure, networking, automation, and self-hosted projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
