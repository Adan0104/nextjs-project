import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Container, SSRProvider} from '@/components/bootstrap';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs image gallery',
  description: 'Nextjs practice project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className='py-4'>
            {children}
            </Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  )
}
