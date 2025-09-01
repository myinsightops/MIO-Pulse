import "./globals.css"
import Banner from "@/components/Banner/Banner"
import Nav from "@/components/Nav/Nav"
import { Wix_Madefor_Text } from "next/font/google"

const wix = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "MyInsightOps",
  description: "MIO",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${wix.className} font-sans antialiased`}>
        <Nav />
        {children}
        <Banner />
      </body>
    </html>
  )
}
