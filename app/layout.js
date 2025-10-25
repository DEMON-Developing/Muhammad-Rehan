import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from 'next';
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
  title: 'Muhammad Rehan | Full Stack Web Developer Portfolio',
  description: 'Hi, I\'m Muhammad Rehan, a web developer and programmer from Kasur, Pakistan. Explore my portfolio to see my skills in web design, development, and more.',
  keywords: ['Muhammad Rehan', 'Muhammad Rehan', 'Web Developer', 'Portfolio', 'Full Stack Developer', 'Kasur', 'Pakistan', 'Programming', 'Web Design'],
  authors: [{ name: 'Muhammad Rehan' }],
  openGraph: {
    title: 'Muhammad Rehan | Professional Portfolio',
    description: 'Explore the work and skills of Muhammad Rehan, a web developer and programmer based in Kasur, Pakistan.',
    url: 'https://muhammad-rehan.vercel.app',
    siteName: 'Muhammad Rehan Portfolio',
  images: [
      {
        url: 'https://muhammad-rehan.vercel.app/BACK1.png',
        width: 800,
        height: 600,
        alt: 'Muhammad Rehan Profile Picture',
      },
    ],
    locale: 'en_US',
     type: 'website',
   },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Rehan | Professional Portfolio',
    description: 'Explore the work and skills of Muhammad Rehan, a web developer and programmer based in Kasur, Pakistan.',
    creator: '@your_twitter_handle',
    images: ['https://muhammad-rehan.vercel.app/BG.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* External CSS links ko yahan direct head tag mein daal diya hai */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         {children}
       </body>
     </html>
  );
}