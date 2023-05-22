'use client'; 
import './globals.css'
import Navbar from "../components/Navbar"
import { CartProvider } from "use-shopping-cart";
import {SessionProvider} from "next-auth/react"; 
import Footer from '@/components/Footer';

export default function RootLayout({ children }) { 
 return ( 
 <html lang="en">
 {/*
 <head /> will contain the components returned by the nearest parent
 head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
 */}
 <head />
 <body>
    
 <SessionProvider>
 <CartProvider
 // Enables local storage
 shouldPersist={true}
 >
    
 <Navbar />
 {children}

 <Footer />
 </CartProvider>
 </SessionProvider>
 </body>
 </html>
 ) 
} 
