import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Montserrat, Noto_Sans, Playfair_Display } from "next/font/google";
import Footer from "./_components/Footer";
import CartDrawer from "./_components/CartDrawer";
import Navbar from "./_components/Navbar";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

const play = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-play",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Habova Online Store",
  description: "Home Lifestyle and Daily Essential Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
          <Providers>
            <Navbar/>
            {/* <CartDrawer/> */}
            <div>{children}</div>
            <Footer />
          </Providers>
      </body>
    </html>
  );
}
