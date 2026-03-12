import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
