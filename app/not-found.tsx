"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center space-y-3">
      <h1 className="font-black text-3xl">404</h1>
      <h2>Not Found</h2>
      <p>this page {pathName}</p>
      <Link href={pathName.includes("dashboard") ? "/dashboard" : "/"}>
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
