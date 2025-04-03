import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";


export const metadata: Metadata = {
  title: "CEN Yearbook",
  description: "Official Yearbook Website for 20th Set Computer Engineering, Covenant University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
