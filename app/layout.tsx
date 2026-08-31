import type { Metadata } from "next";
import { Playfair_Display, Jost, Architects_Daughter, Patrick_Hand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-handwriting",
  subsets: ["latin"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIRELA — Wear the softness you were never given permission to keep",
  description: "Every VIRELA piece is a small act of creativity you get to carry with you. Handmade scrunchies, jewelry, and creative crafts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} ${architectsDaughter.variable} ${patrickHand.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FDF7F4] text-[#241E20] selection:bg-[#F2BAC9] selection:text-[#52172C]">
        {children}
      </body>
    </html>
  );
}
