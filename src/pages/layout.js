import { Inter } from 'next/font/google'
import './globals.css'
import Home from './page'
import Application from '@tria-sdk/authenticate'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Application/>
      <Home/>
    </html>
  )
}
