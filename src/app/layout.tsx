import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToasterContext } from '@/app/context/ToasterContext'
import './globals.css'
import AuthContext from '@/app/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chatter',
  description: 'Chatter app online messenger application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-bg-gradient h-full lg:p-8'>
          <AuthContext>
            <ToasterContext />
            {children}
          </AuthContext>
        </div>
      </body>
    </html>
  )
}
