import BottomNav from "@/components/bottom-nav";
import TopNavBar from "@/components/topnav-bar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <TopNavBar />
      {children}
      <BottomNav />
    </main>
  );
}
