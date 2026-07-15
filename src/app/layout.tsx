import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const interDisplay = Inter({
  subsets: ["latin"],
  weight: "900", // Black weight for display
  variable: "--font-display",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Manoj Ahuja — Director",
  description: "Cinematic portfolio of film director Manoj Ahuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} ${playfair.variable}`}>
      <body className="antialiased bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
