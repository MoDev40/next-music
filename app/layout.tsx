import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./fonts/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { AudioProvider } from "@/hooks/audio";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-medium`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AudioProvider>{children}</AudioProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
