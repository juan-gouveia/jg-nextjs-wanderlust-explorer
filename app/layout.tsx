
import "../app/globals.css";
import { Suspense, type ReactNode } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <Suspense fallback={null}>
          <SearchBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}