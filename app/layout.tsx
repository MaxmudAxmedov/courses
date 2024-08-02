import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white dark:bg-gray-900 text-black dark:text-white'>
        <header className="bg-white dark:bg-gray-900 z-10 shadow-xl dark:shadow-slate-800 fixed w-screen">
          <NavBar />
        </header>
        <main className="pt-[80px]">
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
