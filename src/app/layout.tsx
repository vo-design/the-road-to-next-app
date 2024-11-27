import "./globals.css";

import {Tickets} from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button"
import {homePath, ticketPaths} from "@/paths";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The roar to Next",
  description: "My road to the Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <nav className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
            ">
        <div>
            <Link href={homePath()} className={buttonVariants({variant: "ghost"})}>
                <Tickets />
                <h1 className="ml-1 text-lg font-semibold">
                    TicketBounty
                </h1>
            </Link>
        </div>
        <div>
            <Link href={ticketPaths()} className={buttonVariants({variant: "default"})}>Tickets</Link>
        </div>
      </nav>
      <main className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col
          "
      >
        {children}
      </main>
      </body>
    </html>
  );
}
