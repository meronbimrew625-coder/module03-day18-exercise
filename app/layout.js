import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "../components/Providers";

const cabin = localFont({
  src: [
    { path: "../public/fonts/Cabin-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Cabin-SemiBold.otf", weight: "600", style: "normal" },
  ],
  display: "swap",
  preload: true,
  variable: "--font-cabin",
});

export const metadata = {
  title: "Addis Eats",
  description: "Addis Eats Next.js performance mini-project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cabin.variable}>
      <body>
        <Providers>
          <header className="site-header">
            <div className="site-header-inner">
              <h1>Addis Eats</h1>
              <nav className="site-nav">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/orders">Orders</Link>
                <Link href="/login">Sign in</Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="site-footer">
            <p>© 2026 Addis Eats</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
