import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "مبدل ارز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`bg-pattern `}
      >
        {children}

        <Footer/>
      </body>
    </html>
  );
}
