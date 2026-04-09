import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "A Parent's Journal: Prenatal Opioid Exposure",
  description: "An anonymous parent's journal navigating prenatal opioid exposure — practical, research-grounded guidance organized by age and symptom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-warm-50 font-serif">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-warm-200 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-warm-500 text-sm">
              Written by an anonymous parent of a child with prenatal opioid exposure. Not medical advice.{" "}
              <a href="/about" className="text-sage-600 hover:underline">About this journal</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
