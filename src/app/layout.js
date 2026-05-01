import "./globals.css";
import { Navbar } from "@/components/layout/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}
