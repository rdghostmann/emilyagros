import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import MobileTabNavigation from "@/components/MobileTabNavigation/MobileTabNavigation";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmilyAgros",
  description: "Your Gateway to the Future of Agriculture and Marketplace",
  icons: {
    icon: "/emily-logo.jpg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (typeof window !== "undefined") {
    // Suppress console errors related to MetaMask
    const originalConsoleError = console.error
    console.error = (...args) => {
      if (args[0]?.includes?.("MetaMask")) {
        return
      }
      originalConsoleError(...args)
    }
  }
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <Head>
        <link rel="icon" href="/emily-logo.jpg" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
      </Head>
      <body className={`${inter.className} antialiased`} cz-shortcut-listen="true">
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TopNavigation username={"JohnDoe"}/>
            <main className="max-w-full mx-auto pb-16 lg:pb-0">
              {/* <main className="max-w-6xl mx-auto pb-16 lg:pb-0"> */}
              

              {children}

            </main>
            <MobileTabNavigation />
            <Toaster />
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}

