import Head from "next/head";
import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chattering",
  description: "AI-powered voice agent deployment for user feedback collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "q0ke3alpgi");
          `,
          }}
        />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex h-screen">
          <Sidebar logoFont={caveat.className} />
          <main className={`flex-1 overflow-auto ${inter.className}`}>
            <div className="container mx-auto p-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight"></h1>
              </div>
              {children}
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}
