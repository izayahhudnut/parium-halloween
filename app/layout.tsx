import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const elegantFont = EB_Garamond({
  variable: "--font-elegant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Parium",
  description: "Parium Presents: A Halloween Soirée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${elegantFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
