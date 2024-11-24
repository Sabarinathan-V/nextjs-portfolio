import localFont from "next/font/local";
import { Anek_Latin } from 'next/font/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import Menu from "./components/containers/Menu";
import Footer from "./components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";


const anek = Anek_Latin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anek-latin',
});

// console.log({anek})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sabarinathan portfolio",
  description: "fullstack developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // className={anek.className}
        className={cn("bg-background", anek.className)}
      >
        <Menu />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
