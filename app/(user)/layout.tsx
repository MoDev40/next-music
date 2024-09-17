import BottomNav from "@/components/bottom-nav";
import TopNavBar from "@/components/topnav-bar";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <main className="flex flex-col min-h-screen">
        <div className="h-16">
          <TopNavBar />
        </div>
        <div className="flex-1 py-4">{children}</div>
        <div>
          <BottomNav />
        </div>
      </main>
    </SessionProvider>
  );
}
