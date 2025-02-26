import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "resTore Moment",
  description: "Generated by Marcos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${ubuntu.className} `}>{children}</body>
    </html>
  );
}
