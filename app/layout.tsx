import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ecommerce Social Media",
  description: "Ecommerce application for people who want to sell their products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
