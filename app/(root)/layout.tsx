import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Threads',
  description: "A Next.js App"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}
        <ClerkProvider>
        <Topbar/>
        <main className="flex flex-row">
            <LeftSidebar/>

              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>

            <RightSidebar/>
        </main>
        <Bottombar/>
        </ClerkProvider>
        </body>
      </html>
  );
}
