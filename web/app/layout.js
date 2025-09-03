import "./globals.css"
import Banner from "@/components/Banner/Banner"
import Nav from "@/components/Nav/Nav"
import Footer from "@/components/Footer/Footer"   // <-- add this import

export const metadata = {
  title: "MyInsightOps",
  description: "MIO",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Nav />
        {children}
        <Footer />       {/* keep Footer global */}
        <Banner />
      </body>
    </html>
  )
}
