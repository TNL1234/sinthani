import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const title = "SINTHANI INDUSTRY CO., LTD.";
const description =
  "Leading manufacturer of quality wire products in Thailand, serving clients worldwide with excellence and reliability since 1964.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "SINTHANI INDUSTRY CO., LTD.",
    images: [{ url: "/media/theme.jpg", alt: "SINTHANI INDUSTRY CO., LTD." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/media/theme.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en"className={`${plexThai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
