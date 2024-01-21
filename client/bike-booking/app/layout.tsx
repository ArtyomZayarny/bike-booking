import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import "./globals.css";
import { saira, sairaStencilOne } from "./fonts";

export const metadata: Metadata = {
  title: "Admin | Bike Booking",
  description: "Bike booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${sairaStencilOne.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
