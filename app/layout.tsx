import type { Metadata } from "next"
import { Inter, Caveat } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chattering",
  description: "AI-powered voice agent deployment for user feedback collection",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex h-screen">
            <Sidebar logoFont={caveat.className} />
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto p-8">
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-3xl font-bold tracking-tight"></h1>
                </div>
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

