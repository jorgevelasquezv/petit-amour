import Footer from "@components/Footer";
import Nav from "@components/Nav";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
