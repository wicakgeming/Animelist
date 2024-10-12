import Navbar from "@/components/Navbar";
// import localFont from "next/font/local";
import { Gabarito } from 'next/font/google'
import "@/app/globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const gabarito = Gabarito({subsets: ["latin"]})

export const metadata = {
  title: "Animelist",
  description: "Website Anime",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${`${gabarito.classname} bg-dark`} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
