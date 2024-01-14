"use client";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
        <main>
          <header>
            <Navbar />
          </header>
          {children}
        </main>
      )}
    </>
  );
}
