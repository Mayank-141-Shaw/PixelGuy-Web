"use client";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isHome = pathname == "/";

  useEffect(() => {
    if (loading) return;
  }, [loading]);

  return (
    <>
      {loading && isHome ? (
        <SplashScreen finishLoading={() => setLoading(false)} />
      ) : (
        <main className="h-screen w-screen">
          <SmoothScroll />
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </main>
      )}
    </>
  );
}
