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

const title = "Sinthani Industry | Quality Steel Wire Manufacturer Since 1964";
const description =
  "Sinthani Industry Co., Ltd. manufactures cold-drawn, galvanized and stranded steel wire in Thailand. ISO 9001:2015 certified, made to your specification. Chat on LINE for a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Sinthani Industry",
    images: [{ url: "/media/theme.jpg", alt: "Steel wire coil by Sinthani Industry" }],
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
