
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bilal saleem - Portfolio",
  description: "Portfolio of M Bilal Saleem",
};

export default function RootLayout({ children }) {
  
     return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Muhammad Bilal Saleem | MERN Stack Developer</title>
        <meta name="description" content="Portfolio of Muhammad Bilal Saleem" />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        {children}
      </body>
    </html>
  )
  
}
