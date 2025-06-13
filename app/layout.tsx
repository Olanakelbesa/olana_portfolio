import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Olana Kelbesa",
  description:
    "A passionate Software Engineering student and web developer from Ethiopia, specializing in building responsive, user-friendly applications using React, Next.js, and TypeScript. This portfolio showcases my technical skills, real-world projects, hackathon achievements, and commitment to solving impactful problems through technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
