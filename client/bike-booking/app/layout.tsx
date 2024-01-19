import type { Metadata } from "next";
import { Saira, Saira_Stencil_One } from "next/font/google";
import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-saira",
});
const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-saira-stencil-one",
});

export const metadata: Metadata = {
  title: "Admin | Bike Booking",
  description: "Bike booking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
