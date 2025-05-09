import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="eng">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script>
      <Script src="lib/easing/easing.min.js"></Script>
      <Script src="lib/waypoints/waypoints.min.js"></Script>
      <Script src="lib/counterup/counterup.min.js"></Script>
      <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="mail/jqBootstrapValidation.min.js"></Script>
      <Script src="mail/contact.js"></Script>
      <Script src="js/main.js"></Script>
    </html>
  );
}
