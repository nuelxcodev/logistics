import { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title:"",
  description:""
}

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="eng">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
