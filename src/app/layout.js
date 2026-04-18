import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/component/Nav";
import Providers from "@/app/component/Providers";

export const dynamic = "force-dynamic";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Raihan Interactive Shop | Premium Quality Delivered Fast",
  description: "Your absolute one-stop premium shop for top-tier products, secure 100% encrypted payments, and blazing fast delivery.",
  keywords: ["e-commerce", "shop", "premium products", "secure shopping", "fast delivery"],
  openGraph: {
    title: "Raihan Interactive Shop",
    description: "Shop premium quality products with lightning-fast delivery and top-notch secure payments.",
    type: "website",
    locale: "en_US",
    siteName: "Raihan Interactive Shop",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
