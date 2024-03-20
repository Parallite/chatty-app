import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToasterContext } from '@/app/context/ToasterContext'
import './globals.css'
import AuthContext from '@/app/context/AuthContext'
import { ActiveStatus } from '@/components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chatty',
  description: 'Chatty app online messenger application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-purple-dark h-full w-full'>
            <AuthContext>
              <ToasterContext />
              <ActiveStatus />
              {children}
            </AuthContext>
      </body>
    </html>
  )
}
