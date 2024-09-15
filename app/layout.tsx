import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./fonts/fonts";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Ultimate Music Player App",
  description:
    "A feature-rich music player for streaming, creating playlists, and enjoying your favorite tunes seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ThemeProvider>
      <Toaster />
    </html>
  );
}
