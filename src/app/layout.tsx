import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries Map Application",
  description: "Explore countries around the world with interactive maps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <footer className="footer text-white text-center p-4 text-xs">
          <p>&copy; 2024 Juan Manuel Tierno. All rights reserved.</p>
          <p>
            Contact:{" "}
            <a target="_blank" href="mailto:jtendersen@gmail.com">
              jtendersen@gmail.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
