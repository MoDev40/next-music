"use client";
import { Frown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center space-y-5 animate-fadeIn">
      <h1 className="font-black text-6xl text-red-500">404</h1>
      <p className="text-lg text-gray-600">
        Oops! The {pathName} you&rsquo;re looking for does&rsquo;nt exist.
      </p>
      <Frown size={50} className="text-gray-500" />
    </div>
  );
}
