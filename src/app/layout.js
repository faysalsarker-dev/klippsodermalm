import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QueryProvider from "./providers/QueryProvider";





import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-oswald',           
  display: 'swap',
});



export const metadata = {
  title: "klippsodermalm",
  description: "klippsodermalm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${oswald.className} font-sans antialiased overflow-x-hidden`}
      >
        <Navbar/>
        <QueryProvider>
          
               {children}

          </QueryProvider>
        <Footer/>
      </body>
    </html>
  );
}
