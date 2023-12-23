import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from '@/provider'
import GlobalContext from '@/context'
import { ReactNode } from 'react'
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Netflix clone build with next.js',
}


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange >
          <GlobalContext>

          {children}
            <Toaster />
          </GlobalContext>

        </Provider>
      </body>
          
    </html>
  )
}
