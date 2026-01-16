// import type { Metadata } from "next";
// import { Inter, Playfair_Display } from "next/font/google";
// import "./";
// import { Navigation } from "@/components/Navigarion";
// import { Footer } from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-serif",
// });

// export const metadata: Metadata = {
//   title: "Mari Tours | Discover Georgia",
//   description:
//     "Experience the magic of Georgia with our curated tours. Discover ancient culture, breathtaking landscapes, and warm hospitality.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
//       <body className="font-sans">
//         <Navigation />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigarion";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mari Tours | Discover the Magic of Georgia",
  description:
    "Experience breathtaking landscapes, ancient history, and warm Georgian hospitality with Mari Tours. Your journey through the Caucasus begins here.",
  keywords: [
    "Georgia travel",
    "Caucasus tours",
    "Georgian wine tours",
    "mountain trekking",
    "cultural tours",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased georgian-pattern-bg">
        <Navigation />
        {children}
        <Footer />

        {/* Scroll Animation Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                    }
                  });
                }, { threshold: 0.1 });
                
                document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
                  observer.observe(el);
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
