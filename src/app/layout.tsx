import { ClientProviders } from "./clientlayout";
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "CRFT Volunteer Connect",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(GeistSans.variable, GeistMono.variable, "antialiased")}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
