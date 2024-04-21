import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {/* <nav>
          <ul className="flex gap-10 justify-center items-center h-12 bg-blue-500">
            <li className="text-2xl font-bold text-white "><Link href="/">Home</Link></li>
            <li className="text-2xl font-bold text-white "><Link href="/about">About</Link></li>
            <li className="text-2xl font-bold text-white "><Link href="/blogs">Blogs</Link></li>
            <li className="text-2xl font-bold text-white "><Link href="/posts">Posts</Link></li>
          </ul>
        </nav> */}
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
