import "./globals.css"
import Banner from "@/components/Banner/Banner"
import Nav from "@/components/Nav/Nav"

export const metadata = {
  title: "MyInsightOps",
  description: "MIO",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Wix Madefor Text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Banner />
      </body>
    </html>
  )
}
