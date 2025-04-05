import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Footer/Footer";


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
        className={`antialiased bg-(--black) font-[family-name:var(--font-montserrat)]`}
      >
        <NavBar/>
        <main className="mt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
