import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import './globals.css'

export const metadata = {
  title: {
    default: 'ELDEN BLING',
    template: '%s | ELDEN BLING',
  },
  description: 'Gallery of Elden Ring outfits.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        <div className="container">
          <Nav />

          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
