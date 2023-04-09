import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
