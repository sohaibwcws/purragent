import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PurrAgent - Your AI-Powered Office",
  description:
    "Chat with your CEO agent, monitor team activity in real-time, and manage your AI workforce from anywhere. Custom AI solutions for businesses.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "AI",
    "office",
    "agents",
    "chat",
    "automation",
    "CEO",
    "self-hosted",
    "tasks",
    "team",
    "management",
    "assistant",
    "workplace",
    "bot",
  ],
  openGraph: {
    title: "PurrAgent - Your AI-Powered Office",
    description:
      "Your AI-powered office at your fingertips. Manage your AI workforce from anywhere.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
