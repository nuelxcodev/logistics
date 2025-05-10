// app/layout.tsx or app/[locale]/layout.tsx

import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Script from "next/script";
import "./globals.css";
import '../public/css/style.min.css';
import "../public/lib/owlcarousel/assets/owl.carousel.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css'



export const metadata: Metadata = {
  title: "AirLogex | Reliable Courier & Logistics Services",
  description:
    "AirLogex is your trusted courier and logistics partner. We deliver packages fast and securely across the country and internationally. Track, ship, and manage your deliveries with ease.",
  keywords: ["courier", "logistics", "delivery", "shipping", "express delivery", "track packages", "international courier", "airlogex"],
  authors: [{ name: "AirLogex", url: "https://airlogex.com" }],
  creator: "AirLogex Team",
  metadataBase: new URL("https://airlogex.com"),
  openGraph: {
    title: "AirLogex | Reliable Courier & Logistics Services",
    description: "Fast and secure courier services. Track your shipments and manage logistics with AirLogex.",
    url: "https://airlogex.com",
    siteName: "AirLogex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AirLogex courier delivery service image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirLogex | Reliable Courier Services",
    description: "Manage your shipments and track packages with AirLogex - trusted logistics solutions.",
    creator: "@airlogex", // optional if you have a Twitter handle
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://airlogex.com",
  },
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Scripts */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
        <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/lib/counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/mail/jqBootstrapValidation.min.js" strategy="lazyOnload" />
        <Script src="/mail/contact.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
