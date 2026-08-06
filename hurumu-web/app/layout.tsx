import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hurumu Woreda Administration",
    template: "%s | Hurumu Woreda",
  },
  description:
    "Official government portal for Hurumu Woreda, Ilu Aba Bora Zone, Oromia Region, Ethiopia.",
  keywords: [
    "Hurumu",
    "Woreda",
    "Oromia",
    "Ethiopia",
    "government",
    "services",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}