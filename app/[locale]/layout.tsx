import { Metadata } from "next";
import { ReactNode } from "react";
import Script from "next/script";

import "./globals.css";
import "@/public/css/style.min.css";
import "@/public/lib/owlcarousel/assets/owl.carousel.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { getDictionary } from "@/libs/i18n/getDictionary";
import type { Locale } from "@/libs/i18n/config";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "AirMetriz | Reliable Courier & Logistics Services",
  description:
    "AirMetriz is your trusted courier and logistics partner. We deliver packages fast and securely across the country and internationally. Track, ship, and manage your deliveries with ease.",
  keywords: ["courier", "logistics", "delivery", "shipping", "express delivery", "track packages", "international courier", "airmetriz"],
  authors: [{ name: "AirMetriz", url: "https://airmetriz.com" }],
  creator: "AirMetriz Team",
  metadataBase: new URL("https://airmetriz.com"),
  openGraph: {
    title: "AirMetriz | Reliable Courier & Logistics Services",
    description: "Fast and secure courier services. Track your shipments and manage logistics with AirMetriz.",
    url: "https://airmetriz.com",
    siteName: "AirMetriz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AirMetriz courier delivery service image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirMetriz | Reliable Courier Services",
    description: "Manage your shipments and track packages with AirMetriz - trusted logistics solutions.",
    creator: "@airmetriz",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://airmetriz.com",
  },
};

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <Navbar dict={dict} />
        <main>{children}</main>
        <Footer dict={dict} />

        {/* Load scripts */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/lib/counterup/counterup.min.js" strategy="afterInteractive" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/mail/jqBootstrapValidation.min.js" strategy="afterInteractive" />
        <Script src="/mail/contact.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
