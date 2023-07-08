import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Top from "@/components/Top";

export const metadata = {
  title: "CASH FLOW ACADEMY",
  description: "CASH FLOW ACADEMY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col  min-h-screen bg3 text-white">
        <Top />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
