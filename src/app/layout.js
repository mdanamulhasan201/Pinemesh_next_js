import { Onest } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";


const onest = Onest({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    base: "Next.js ",
    template: "%s | Next.js",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
