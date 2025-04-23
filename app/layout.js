import {  Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio-Gopal Kumar",
  description: "The Art of Deception",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
//dark


// dark:bg-darkTheme dark:text-white