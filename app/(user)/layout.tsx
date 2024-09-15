import BottomNav from "@/components/bottom-nav";
import TopNavBar from "@/components/topnav-bar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="h-16">
        <TopNavBar />
      </div>
      <div className="flex-1 py-4">{children}</div>
      <div>
        <BottomNav />
      </div>
    </main>
  );
}
