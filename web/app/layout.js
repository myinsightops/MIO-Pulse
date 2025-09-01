import "./globals.css"
import Banner from "@/components/Banner/Banner"

export const metadata = {
  title: "MyInsightOps",
  description: "MIO",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Banner />
      </body>
    </html>
  )
}
